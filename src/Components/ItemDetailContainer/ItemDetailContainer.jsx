import React from 'react'
import { useState, useEffect } from 'react'
// import  { getProductsById } from "../../Mocks/AsynckMocks"
import ItemDetail from '../ItemDeatil/ItemDetail'
import { useParams } from 'react-router'
import { getDoc, doc, QueryDocumentSnapshot } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import { toast } from 'react-toastify';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        const productDoc = doc(db, 'products', itemId)

        getDoc(productDoc)
            .then(QueryDocumentSnapshot =>{
                const data = QueryDocumentSnapshot.data()
                const prodAdapted = { id: QueryDocumentSnapshot.id, ...data }

                setProduct(prodAdapted)
            })
            .catch(error=>{
                toast.error(`Error al cargar los datos del productos`,error)
            })
            
    },[itemId])



    return (
    <>
    <div className='container' id='container'>
        <h1 className='paddingTitles'>Detalles del producto</h1>
        <ItemDetail {...product}/>
    </div>
    
    </>
)
}

export default ItemDetailContainer