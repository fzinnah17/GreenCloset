import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Hook.css";
import hookpic from './pic1person.jpg';


const Hook = () => {
    return (
        
    
    <div className="hook"> 
    <header className='headername'>
       <h1 className='GC'>Green Closet </h1> 
       </header>
       <p className='description'>
       "Clothing the Future, One Wardrobe at a Time: Share Your Closet with GreenCloset!" 
       </p>
       <div className="image">
       <img src={hookpic} alt="pic" width="300" height="300" align="middle"/>
       </div>
       


       
        </div>

        
    );
};

export  default Hook;