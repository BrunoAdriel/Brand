import React from 'react'
import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { toast } from 'react-toastify';
import {getDocs, collection, query, where, orderBy} from 'firebase/firestore'
import { db } from '../../services/firebaseConfig';


function ItemListContainer() {
    const [products,  setProducts] = useState([])
    const [loading, setLoadin] = useState(true)

    const { categoryId } = useParams()

    useEffect(()=>{
    
        const prodsCollection = categoryId
        ? query(collection(db, 'products'), where ('category', '==', categoryId))
        : query(collection(db, 'products'), orderBy('category'))

        getDocs(prodsCollection)
            .then(querySnapshot =>{
                const productAdapted = querySnapshot.docs.map( doc =>{
                    const data = doc.data()
                    return{ id: doc.id, ...data}
                })
                setProducts(productAdapted)
            })
            .catch(error=>{
                toast.error(`Error al cargar los productos`,error)
            })
            .finally(()=>{
                setLoadin(false)
            })
    },[categoryId])

    if(loading){
        return( <section className='paddingCard'>
                    <h1>Cargando Productos...</h1>
                    <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                </section>
    )
}


    return (
    <>
        <div className='container' id='container'>
            <h1 className='paddingTitles' >Nuestros Productos</h1>
            <ItemList products={products}/>
        </div>
    </>
)
}

export default ItemListContainer