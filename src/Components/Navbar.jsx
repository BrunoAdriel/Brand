import React from 'react'
import Logo from '../Imgs/brilliance.png'
import CartWidget from './CartWidget'





function Navbar() {
    return (
        <div className='sectionNav'> 
            <section>
                <img src={Logo} alt='Logo de la compañia'/>
            </section>
            <ul className="nav nav-underline justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="# ">Brand</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" >Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" >Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" >Sobre nosotros</a>
                    </li>   
            </ul>
            <section className='SpaceWallet'>
                <CartWidget/>
            </section>
        </div>
)
}

export default Navbar