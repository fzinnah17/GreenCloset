import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-page" element={<ProductPage />} />
        {/* <Route path="/location/:id" element={<LocationEvents />} /> */}

      </Routes>
      </div>
  );
}

export default App;