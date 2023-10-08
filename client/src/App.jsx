import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import IndividualProductPage from './pages/IndividualProductPage';
import ProductsPage from './pages/ProductsPage';
import './css/App.css';

const App = () => {
  const aboutRef = React.useRef(null);

  return (
    <div id='app'>
      <Navbar aboutRef={aboutRef} />
      <Routes>
        <Route path="/" element={<HomePage aboutRef={aboutRef} />} />
        <Route path="/product-page/:id" element={<IndividualProductPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
