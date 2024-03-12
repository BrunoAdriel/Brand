import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'

const ItemDetail = ({ name, price, img, description, stock }) => {
    const [quantity, setquantity] = useState(0)

    const handleOnAdd = (quantity) => {
        console.log('cantidad del producto:  ' + quantity)
        setquantity(quantity)
    }
    
    return (
    <article>
        <img src={img} />
        <h4>{name}</h4>
        <a>{description}</a>
        <a>{price}</a>
        {quantity === 0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/> : <button>Ver carrito</button>}
    </article>
)
}

export default ItemDetail