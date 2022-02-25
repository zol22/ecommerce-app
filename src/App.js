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
import Favorites from './pages/Favorites';
import About from './pages/About';
import Contact from './pages/Contact';



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className='app'> 
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/products/:id" element={<Product />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/cart"  element={<Cart />}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
