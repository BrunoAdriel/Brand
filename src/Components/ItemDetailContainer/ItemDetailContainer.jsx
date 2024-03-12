import React from 'react'
import { useState, useEffect } from 'react'
import  { getProductsById } from "../../Mocks/AsynckMocks"
import ItemDetail from '../ItemDeatil/ItemDetail'
import { useParams } from 'react-router'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(result =>{
                setProduct(result)
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