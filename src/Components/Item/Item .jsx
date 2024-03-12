import React from 'react'
import { Link } from 'react-router-dom'

const Item  = ({ id, name, category, img, description}) => {
    return (
    <article>
        <h3>{category}</h3>
        <h4>{name}</h4>
        <img src={img} />
        <a>{description}</a>
        <Link to={`/item/${id}`}>Ver producto</Link>
    </article>
)
}

export default Item