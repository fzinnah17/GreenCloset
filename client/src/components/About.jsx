import React from 'react';
import { Link } from 'react-router-dom';
import "../css/About.css";
// import { Aboutpic } from '../public/Aboutpic';

const About = () => {
    return (
       <div className='About'>
        <h1 className='Aboutname'> About</h1>
       
       <p className='aboutp'>
       At GreenCloset, we are dedicated to making a meaningful impact in low-income communities, where many individuals struggle to access basic necessities, including clothing. In the context of New York City colleges, where over 50% of students face financial challenges, we've developed a unique resource—an innovative mobile and web app that facilitates the easy exchange of clothing. 
</p>
        <p className='aboutp2'>
        Our mission is to ensure that individuals always have clothes on their backs, especially for important occasions like first interviews and meetings. Through the power of giving, we are creating a supportive community where everyone can access the attire they need to succeed, bridging the gap for the countless low-income individuals who face clothing insecurity. 

        </p>
         {/* <div className="imageAbout">
       <img src={Aboutpic} alt="pic" width="300" height="300" align="middle"/>
       </div> */}

        
        </div>

        
    );
};

export  default About;