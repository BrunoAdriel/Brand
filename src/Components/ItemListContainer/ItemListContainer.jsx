import React from 'react'
import { useEffect, useState } from 'react'
import { getProducts,  getProductsByCategory } from '../../Mocks/AsynckMocks'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router'

function ItemListContainer() {
    const [products,  setProducts] = useState([])
    const [loading, setLoadin] = useState(true)

    const { categoryId } = useParams()

    useEffect(()=>{
        setLoadin(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
        asyncFunction(categoryId)
            .then(result => {
                setProducts(result)
            })
            .catch(error=>{
                console.log(error)
            })
            .finally(()=>{
                setLoadin(false)
            })
    },[categoryId])

    if(loading){
        return <h1>Cargando listado de productos ...</h1>
    }


    return (
    <>
        <div className='container'>
            <h1>Nuestros Productos</h1>
            <ItemList products={products}/>
        </div>
    </>
)
}

export default ItemListContainer