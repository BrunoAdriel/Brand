import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'} />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos de  la categoria: '} />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
    </>
);
}

export default App;
