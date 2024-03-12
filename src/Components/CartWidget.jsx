import React from 'react'
import Wallet from '../Imgs/wallet2.png'
import { Link } from 'react-router-dom'

function CartWidget() {
return (
    <div className='nav'>
        <Link  to='/cart'><img src={Wallet} alt='carrito de compras' href="#"/>3 </Link>
    </div>
)
}

export default CartWidget