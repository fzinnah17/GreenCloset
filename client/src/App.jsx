import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/location/:id" element={<LocationEvents />} /> */}
      </Routes>
      </div>
  );
}

export default App;