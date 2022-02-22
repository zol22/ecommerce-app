import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/Nav'
import Products from './pages/Products';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className='app'> 
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/products" exact element={<Products />}/>
          <Route path="/products/:id" exact element={<Product />}/>
          <Route path="/cart" exact element={<Cart />}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
