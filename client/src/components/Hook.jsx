import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Hook.css";
import hookpic from './pic1person.jpg';


const Hook = () => {
    return (
        
    
    <div className="hook"> 
    
       <h1 className='GC'>Green Closet </h1> 
       <div classsName='cta-container'>
       <p className='description'>
       Clothing the Future, One Wardrobe at a Time:  
        in GreenCloset you can share your closet and find a treasure, while you help the planet.
       
       </p>
       <div className="image">
       <img src={hookpic} alt="pic" width="300" height="300" align="middle"/>
       </div>
       </div>

       


       
        </div>

        
    );
};

export  default Hook;