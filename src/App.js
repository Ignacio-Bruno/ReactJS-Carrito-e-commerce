import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a DropsBA...'} />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}
export default App;