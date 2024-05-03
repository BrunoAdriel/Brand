import React from 'react'
import Item from '../Item/Item '

const ItemList = ({ products }) => {
    return (
        <section className='paddingCard'>
            {products ? (
                products.map(product => (
                    <Item key={product.id} {...product} />
                ))
            ) : (
                <p>No hay productos disponibles</p>
            )}
        </section>
    )
}

export default ItemList