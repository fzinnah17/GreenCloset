import React from 'react';
import { Link } from 'react-router-dom';
import "../css/About.css";
import Aboutpic from './collaborating.jpg';

const About = () => {
    return (
       <div className='About'>
        <h1 className='Aboutname'> About</h1>
       
       <p className='aboutp'>GreenCloset's mission is to promote sustainability in fashion, offering inclusive and environmentally responsible clothing solutions.
       Our focus is on under-resourced communities, providing free, quality clothing, especially for important occasions like job interviews. Leveraging technology, we track and address environmental disparities, fostering eco-conscious choices for a greener, more equitable world. To tackle fast fashion's detrimental effects, we emphasize recycling and upcycling, ensuring clothing finds new life instead of contributing to waste.
</p>
         <div className="imageAbout">
       <img src={Aboutpic} alt="pic" width="300" height="300" align="middle"/>
       </div>

        
        </div>

        
    );
};

export  default About;