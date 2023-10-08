import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import IndividualProductPage from './pages/IndividualProductPage';
import ProductsPage from './pages/ProductsPage';
import './css/App.css'

const App = () => {
  return (
    <div id='app'>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-page/:id" element={<IndividualProductPage />} />
        {/* <Route path="/location/:id" element={<LocationEvents />} /> */}
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      </div>
  );
}

export default App;