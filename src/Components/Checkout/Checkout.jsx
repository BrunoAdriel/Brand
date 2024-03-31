import React from 'react'
import { CartContext } from '../Context/CartContext'
import { useContext, useState } from 'react'
import { collection, query, where, documentId, getDocs, addDoc, writeBatch, Timestamp } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import { toast } from 'react-toastify';
import BackButton from '../BackButton/BackButton'

const Checkout = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [zip, setZip] = useState('');
    const { cart, totalPrice, clear} = useContext(CartContext)
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)

    
    const createOrder = async () =>{
        try{
            setLoading(true)
            const objOrder = {
                buyer: {
                    // nombre:'ads',
                    // email:'ads@',
                    // telefono: '222'
                    nombre: name,
                    apellido: surname,
                    email: email,
                    direccion: address,
                    telefono: number,
                    zip: zip 
                },
                items: cart,
                total: totalPrice(),
                date: Timestamp.fromDate(new Date())
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
                    batch.update(doc.ref, {stock: stockDb - prodQuantity} )
                }else {
                    outOfStock.push({id: doc.id, ...data})
                }
            })
            


            if(outOfStock.length === 0){
                batch.commit()
                const orderCollection = collection(db, 'orders')
                const { id } = await addDoc(orderCollection, objOrder)
                clear()
                setOrderId(id)
            }else{
                toast.error("hay un producto fuera de Stock")
            }

        }catch(error){
            console.error(error);
            toast.error('hubo un error en la generacion de la orden', error);
        }finally{
            setLoading(false)
        }
    
    }
    if(loading){
        return (<section className='linkClass'>
                    <h1>Tu orden esta siendo generada...</h1>
                    <div className="spinner-border text-secondary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </section>
        )}
    

        if(orderId){
            return <h3 className='linkClass SpaceWallet'>Gracias por su compra su numero de orden es: {orderId}</h3>
        }


return (<>
<section className='paddingCard'>
    <BackButton/>
</section>
<div className='containerCheckout'>
    <form id="registerForm" onSubmit={(e) => { e.preventDefault(); createOrder(); }}>
        <div className="row">
            <div className="col">
            <label for="imputName" />
                <input type="text" id="imputName" className="form-control" placeholder="Nobre" aria-label="First name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="col">
            <label for="imputSurname"/>
                <input type="text" id="imputSurname" className="form-control" placeholder="Apellido" aria-label="Last name" value={surname} onChange={(e) => setSurname(e.target.value)}/>
            </div>
        </div>
        <div className="col-md-8">
            <label for="inputNumber" className="form-label"/>
            <input type="text" className="form-control" id="inputNumber" placeholder="Numero de Telefono" value={number} onChange={(e) => setNumber(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label"></label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Direccion Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label"></label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Direccion Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <section className='row'>
        <div className="col-md-6">
            <label for="inputAddress" className="form-label"/>
            <input type="text" className="form-control" id="inputAddress" placeholder="Direccion de entrega" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div className="col-md-2">
            <label for="inputZip" className="form-label"/>
            <input type="text" className="form-control" id="inputZip" placeholder='Zip' value={zip} onChange={(e) => setZip(e.target.value)}/>
        </div>
        </section>
        <button className='btn btn-success buttonSpace' onClick={createOrder}>Finalizar Compra!</button>
    </form>
</div>
</>)
}

export default Checkout