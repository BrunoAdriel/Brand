import React from 'react'
import { CartContext } from '../Context/CartContext'
import { useContext, useState } from 'react'
import { collection, query, where, documentId, getDocs, querySnapshot, addDoc, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'

const Checkout = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [zip, setZip] = useState('');
    const { cart, totalPrice} = useContext(CartContext)
    
    const createOrder = async () =>{
    try{
            const objOrder = {
                buyer: {
                    nombre: name,
                    apellido: surname,
                    email: email,
                    direccion: address,
                    telefono: number,
                    zip: zip 
                },
                items: cart,
                total: totalPrice
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
    
            const prodCollection = query(collection(db, 'products'),where(documentId(), 'in', ids))
    
            const querySnapshot = await getDocs(prodCollection)
            const { docs } = querySnapshot
    
            docs.forEach(doc =>{
                const data = doc.data()
                const stockDb = data.stock
    
                const prodAddedToCart = cart.find( prod => prod.id === doc.id)
                const prodQuantity = prodAddedToCart.quantity
    
                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {sotck: stockDb - prodQuantity} )
                }else {
                    outOfStock.push({id: doc.id, ...data})
                }
            })
    
            if(outOfStock.length === 0){
                batch.commit()
                const orderCollection = collection(db,'orders')
                const { id } = addDoc(orderCollection, objOrder)
            }else{
                console.log("hay un producto fuera de Stock")
            }
        }
    
    }catch (error) {
        console.log("Error", error);
    }

    return (

<div className='containerCheckout'>
    <form id="registerForm" >
        <div className="row">
            <div className="col">
            <label for="imputName"/>
                <input type="text" id="imputName" className="form-control" placeholder="Nobre" aria-label="First name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="col">
            <label for="imputSurname"/>
                <input type="text" id="imputSurname" className="form-control" placeholder="Apellido" aria-label="Last name" value={surname} onChange={(e) => setSurname(e.target.value)}/>
            </div>
        </div>
        <div class="col-md-8">
            <label for="inputNumber" class="form-label"/>
            <input type="text" class="form-control" id="inputNumber" placeholder="Numero de Telefono" value={number} onChange={(e) => setNumber(e.target.value)}/>
        </div>

        <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label"></label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Direccion Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label"></label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Direccion Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <section className='row'>
        <div class="col-md-6">
            <label for="inputAddress" class="form-label"/>
            <input type="text" class="form-control" id="inputAddress" placeholder="Direccion de entrega" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div class="col-md-2">
            <label for="inputZip" class="form-label"/>
            <input type="text" class="form-control" id="inputZip" placeholder='Zip' value={zip} onChange={(e) => setZip(e.target.value)}/>
        </div>
        </section>
        <button onClick={createOrder}>Finalizar Compra!</button>
    </form>
</div>
)
}

export default Checkout