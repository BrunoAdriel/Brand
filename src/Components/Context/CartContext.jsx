import React from 'react'
import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {
        try {
            const localCart = localStorage.getItem("cartProducts");
            return localCart ? JSON.parse(localCart) : [];
        } catch (error) {
            console.error("Error reading LocalStorage", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem("cartProducts", JSON.stringify(cart));
        } catch (error) {
            console.error("Error al guardar productos del carrito en el almacenamiento local:", error);
        }
    }, [cart]);

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
        toast.error(`Se eliminaron todos los productos del carrito`)
    }

    const totalPrice = () =>{
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    };

    const useLoading = () => {
        const [loading, setLoading] = useState(false);
    
        const startLoading = () => {
            setLoading(true);
        };
    
        const stopLoading = () => {
            setLoading(false);
        };
    
        return { loading, startLoading, stopLoading };
    }


return (
    <CartContext.Provider value={{cart, addItem, totalQuantity, removeItem, clear, totalPrice, useLoading, isInCart}}>
        {children}
    </CartContext.Provider>
)
}

export default CartProvider