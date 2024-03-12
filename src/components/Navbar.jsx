import React, { Component, useState, useEffect } from 'react';
import "./Navbar.css"
function NavBar() {



        const handleClick = (elemId) => {
          const element = document.getElementById(elemId);
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
          }
        };

        return (
                <div className={`navbar`}>
                <div className='navbar__title navbar__item'>Portfolio</div>
                <div className='navbar__item' onClick={() => handleClick("aboutDiv")}>About Me</div>
                <div className='navbar__item' onClick={() => handleClick("skillsDiv")}>Skills</div>
                <div className='navbar__item' onClick={() => handleClick("workDiv")}>Work</div>        
                <div className='navbar__item' onClick={() => handleClick("contact")}>Contact</div>   
                </div>
        );
    
}


export default NavBar;