import React from 'react'
import ItemDetail from '../ItemDeatil/ItemDetail'
import { useParams } from 'react-router'
import { toast } from 'react-toastify';
import BackButton from '../BackButton/BackButton';
import { getProductsById } from '../../services/firestore/products'
import { useAsync } from '../../hooks/useAsync'

const ItemDetailContainer = () => {
    const { itemId } = useParams()

    const asyncFunction = () => getProductsById(itemId)
    const {data: product, loading, error} = useAsync(asyncFunction, [itemId])

    if(loading){
        return( <section className='paddingCard'>
                    <h1>Cargando Detalles de Producto...</h1>
                    <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                </section>
        )
    }

    if(error){
        toast.error(`Error al cargar el detalle del producto`,error)
    }

    return (
    <>
    <div className='container' id='container'>
        <BackButton/>
        <h1 className='paddingTitles'>Detalles del producto</h1>
        <ItemDetail {...product}/>
    </div>
    
    </>
)
}

export default ItemDetailContainer