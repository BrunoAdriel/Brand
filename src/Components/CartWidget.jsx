import React from 'react'
import Wallet from '../Imgs/wallet2.png'

function CartWidget() {
return (
    <div className='nav'>
        <img src={Wallet} alt='carrito de compras' href="#"/>
        <p>3</p>
    </div>
)
}

export default CartWidget