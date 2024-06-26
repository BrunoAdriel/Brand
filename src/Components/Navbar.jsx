import React, { useEffect, useState } from 'react'
import Logo from '../Imgs/brilliance.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import {  collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../services/firebaseConfig'
import { toast } from 'react-toastify';




function Navbar() {
    const [category, setCategory] = useState([])

    useEffect(()=>{
        const categoriesCollection = collection( db, 'category')
        const orderedCategories = query(categoriesCollection, orderBy('order', 'asc'));
        
        getDocs(orderedCategories)
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
            </ul>
            <section className='SpaceWallet'>
                <CartWidget/>
            </section>
        </div>
)
}

export default Navbar