import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const ItemCart = ({product}) => {

    const { removeItem } = useContext(CartContext)

return (
        <tr className="table-light table-border">
            <td className="table-light"><img src={product.img} alt={product.name} className='imgCart' /></td>
            <td className="table-light">{product.name}</td>
            <td className="table-light">{product.price}</td>
            <td className="table-light">{product.quantity}</td>
            <td className="table-light">{product.quantity * product.price}</td>
            <td ><button onClick={()=> removeItem(product.id)}>❌</button></td>
        </tr>
)
}

export default ItemCart