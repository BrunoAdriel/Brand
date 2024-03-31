import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router'
import { getProducts } from '../../services/firestore/products'
import { toast } from 'react-toastify';
import { useAsync } from '../../hooks/useAsync'


function ItemListContainer() {

    const { categoryId } = useParams()

    const asyncFunction = () => getProducts(categoryId)
    const { data: products, loading, error } = useAsync(asyncFunction, [categoryId])

    if(error){
        toast.error(`Error al cargar los productos`,error)
    }

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