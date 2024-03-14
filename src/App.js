import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState } from 'react';

export const CartContext = createContext()

function App() {

  const [cart, setCart] = useState([])
  console.log(cart)
  
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


return (
    <>
    <CartContext.Provider value={{cart, addItem}}>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos de  la categoria: '} />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
    </>
);
}

export default App;
