import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './Components/Context/CartContext';
import Cart from './Components/Cart/Cart';
import { NotificationProvider} from './Components/Notificaciones/NotificacionService.jsx'
import 'react-toastify/dist/ReactToastify.css';



function App() {

return (
    <>
      <NotificationProvider>
      <BrowserRouter>
        <CartProvider>
      <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos de  la categoria: '} />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
        </NotificationProvider>
    </>
);
}

export default App;
