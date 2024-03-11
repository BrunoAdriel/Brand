import React from 'react'
import { useEffect, useState } from 'react'
import { getProducts } from '../../Mocks/AsynckMocks'
import ItemList from '../ItemList/ItemList'


function ItemListContainer(props) {
    const [products,  setProducts] = useState([])


    useEffect(()=>{
        getProducts()
            .then(result => {
                setProducts(result)
            })
    })


    return (
    <>
        <div className='container'>
            <p>
                {props.greeting}
                <ItemList products={products}/>
            </p>
        </div>
    </>
)
}

export default ItemListContainer