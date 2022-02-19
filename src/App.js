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

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className='app'> 
        <Routes>
          <Route path="/home" exact element={<Home />}/>
          <Route path="/products" exact element={<Products />}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
