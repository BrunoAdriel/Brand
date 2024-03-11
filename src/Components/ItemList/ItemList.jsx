import React from 'react'

const ItemList = ({products}) => {
    return (

    <section>
        {products.map(products =>{
            return <p  key={products.id}>{products.name}</p>
            
        })}
    </section>

)
}

export default ItemList