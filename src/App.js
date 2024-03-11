import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemCount from './Components/ItemCount/ItemCount';

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting='Lorem ipsum dolor sit amet.'/>
    <ItemCount stock={10} />
    </>
);
}

export default App;
