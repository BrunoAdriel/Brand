import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import { useNotification } from '../Notificaciones/NotificacionService'


const ItemDetail = ({ name, price, img, description, stock, id }) => {
    const [quantity, setquantity] = useState(0)

    const { addItem } = useContext(CartContext)

    const {showNotification} = useNotification()

    const handleOnAdd = (quantity) => {
        setquantity(quantity)

        const objtToCart ={
            id, name, price, quantity, img
        }

        showNotification('success', `se agrego correctamente ${quantity}, ${name} `)

        addItem(objtToCart)
    
    }
    
    return (
    <article className='paddingItemDetail'>
        <div className="card imgItemDetail ">
        <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">$ {price}</p>
                {quantity === 0 ?( <ItemCount stock={stock} onAdd={handleOnAdd}/> ):<>
                <Link to='/cart'><button className="btn btn-success">Ver carrito! 🛒</button></Link> <Link to='/'><button className="btn btn-secondary buttonSpace">Continuar comprando</button></Link>
                </>} 
            </div>
        </div>
    </article>
)
}

export default ItemDetail



