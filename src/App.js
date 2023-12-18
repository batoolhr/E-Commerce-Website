import React from 'react';
import { HashRouter  as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Cart from './Components/Products/Cart';
import ProductDetails from './Components/Products/ProductDetails';



function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/ProductDetails' element={<ProductDetails />}/>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
