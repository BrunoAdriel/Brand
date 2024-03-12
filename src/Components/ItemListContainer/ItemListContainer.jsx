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
        return( <section className='paddingCard'>
                    <h1>Cargando Productos...</h1>
                    <div class="spinner-border text-secondary" role="status">
                    <span class="visually-hidden">Loading...</span>
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