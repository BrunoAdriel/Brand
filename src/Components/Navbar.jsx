import React, { useEffect, useState } from 'react'
import Logo from '../Imgs/brilliance.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import {  collection, getDocs, orderBy } from 'firebase/firestore'
import { db } from '../services/firebaseConfig'
import { toast } from 'react-toastify';




function Navbar() {
    const [category, setCategory] = useState([])

    useEffect(()=>{
        const categoriesCollection = collection( db, 'category', orderBy('order', 'asc'))
        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoryAdapted = querySnapshot.docs.map( doc =>{
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setCategory(categoryAdapted)
            })
            .catch(error=>{
                toast.error(`Error al cargar los productos`,error)
            })
    }, [])

    return (
        <div className='sectionNav'> 
            <section>
                <Link to='/'><img src={Logo} alt='Logo de la compañia'/></Link>
            </section>
            <ul className="nav nav-underline justify-content-center">

                {
                    category.map( cat =>{
                        return <Link key={cat.id} to={`/category/${cat.slug}`}><a className="nav-link">{cat.name}</a></Link>
                    })
                }

                {/* <li className="nav-item">
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
                    </li>    */}
            </ul>
            <section className='SpaceWallet'>
                <CartWidget/>
            </section>
        </div>
)
}

export default Navbar