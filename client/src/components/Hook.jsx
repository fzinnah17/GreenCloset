import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Hook.css";
import hookpic from './boutique.jpg';


const Hook = () => {
    return (
        
    
    <div className="hook"> 
    
       <h1 className='GC'>Green Closet </h1> 
      
      <body>
      <div className="page-container">
      <p className="content">Clothing the Future, One Wardrobe at a Time:  
        in GreenCloset you can share your closet and find a treasure, while you help the planet.</p>
       
       <img src={hookpic} alt="pic" width="270" height="270" align="middle" className="right-image"/>
       
       
       </div>
       
       </body>

        </div>

        
    );
};

export  default Hook;