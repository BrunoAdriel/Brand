import React from 'react'
import { createContext, useState } from 'react';

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const addItem = (prodToAdd) => {
    if (!isInCart(prodToAdd.id)) {
        setCart(prev => [...prev, prodToAdd]);
    } else {
        setCart(prev =>prev.map(item =>item.id === prodToAdd.id ? 
                { ...item, quantity: item.quantity + prodToAdd.quantity } : item
        ));
    }
    };

    const isInCart = (id) =>{
        return cart.some(prod => prod.id === id)
    }

    const getTotalQuantity = () =>{
    let acc = 0

    cart.forEach(prod=>{
        acc += prod.quantity
    })
    return acc
    }

    const totalQuantity = getTotalQuantity()


    const removeItem = (prodId) =>{
        if (isInCart(prodId)) {
            setCart(prev => prev.filter(prod => prod.id !== prodId));
        }else
            alert('error al eliminar producto')
    };

    const clear = () => {
        setCart([])
    }

return (
    <CartContext.Provider value={{cart, addItem, totalQuantity, removeItem, clear}}>
        {children}
    </CartContext.Provider>
)
}

export default CartProvider