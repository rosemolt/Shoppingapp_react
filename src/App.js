import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import Navbar from './components/Navbar';
import ViewProduct from './components/ViewProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewNews from './components/ViewNews';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddProduct/>}/>
    <Route path='/SearchProduct' element={<SearchProduct/>}/>
    <Route path='/DeleteProduct' element={<DeleteProduct/>}/>
    <Route path='/ViewProduct' element={<ViewProduct/>}/>
    <Route path='/ViewNews' element={<ViewNews/>}/>
   </Routes>
   </BrowserRouter>
    
  );
}

export default App;
