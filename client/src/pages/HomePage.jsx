import React from 'react';
import Hook from '../components/Hook.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import FooterTwo from '../components/FooterTwo.jsx';

import "./HomePage.css";
const HomePage = () => {
    return (
        <div className="homepage-container">
            <Hook />
            <Cards />
            <About/>
            <FooterTwo/>
            
          
        </div>
    );
}

export default HomePage;