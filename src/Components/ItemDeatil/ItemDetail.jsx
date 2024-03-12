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
    <article className='paddingItemDetail'>
        <div className="card imgItemDetail ">
        <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">$ {price}</p>
                {quantity === 0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/> : <button className="btn btn-success">Ver carrito! 🛒</button>}
            </div>
        </div>
    </article>
)
}

export default ItemDetail



