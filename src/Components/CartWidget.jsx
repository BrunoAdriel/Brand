import React from 'react'
import Wallet from '../Imgs/wallet2.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from './Context/CartContext'

function CartWidget() {

    const { totalQuantity } =useContext(CartContext)

return (
    <div className='nav'>
        <Link  to='/cart'><img src={Wallet} alt='carrito de compras' href="#"/>{ totalQuantity }</Link>
    </div>
)
}

export default CartWidget