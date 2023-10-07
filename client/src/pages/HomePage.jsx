import React from 'react';
import Hook from '../components/Hook.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import "./HomePage.css";
const HomePage = () => {
    return (
        <div className="homepage-container">
            <Hook />
            <Cards />
            <About/>
          
        </div>
    );
}

export default HomePage;