import React from 'react'
import Logo from '../Imgs/brilliance.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'




function Navbar() {
    return (
        <div className='sectionNav'> 
            <section>
                <Link to='/'><img src={Logo} alt='Logo de la compañia'/></Link>
            </section>
            <ul className="nav nav-underline justify-content-center">
                <li className="nav-item">
                    <Link to='/'><a className="nav-link active" aria-current="page" href="#">Brand</a></Link>
                </li>
                <li className="nav-item">
                    <Link to='/category/Celulares'><a className="nav-link" href="#" >Celulares</a></Link>
                </li>
                <li className="nav-item">
                <Link to='/category/iPads'><a className="nav-link" href="#" >Ipads</a></Link>
                </li>
                <li className="nav-item">
                <Link to='/category/Laptops'><a className="nav-link" href="#" >Laptops</a></Link>
                    </li>   
            </ul>
            <section className='SpaceWallet'>
                <CartWidget/>
            </section>
        </div>
)
}

export default Navbar