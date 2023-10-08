import React from 'react';
import Hook from '../components/Hook.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import FooterTwo from '../components/FooterTwo.jsx';
import "../css/HomePage.css";

const HomePage = ({ aboutRef }) => {  // Accept aboutRef as a prop
  return (
    <div className="homepage-container">
      <Hook />
      <Cards />
      <About ref={aboutRef} />
      <FooterTwo />
    </div>
  );
}

export default HomePage;
