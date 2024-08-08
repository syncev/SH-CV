import React, { useState } from "react";
import buttonImg from '/src/assets/icons/menu.svg'
import {Link} from "react-router-dom"
import ActionBtn from './MyProjectsBtn';

const Navbar = () => {

  
 
  return (
    <header>
      
      <div className="ul-wrapper">
        <ul className={`nav-ul `}>
          
          <li className="navBtnLi">
            <Link to="/SH-CV/contact" onClick={btnHandler}>Contact</Link>
          </li>
          <li className="navBtnLi">
            <Link to="/SH-CV/about" onClick={btnHandler}>About Me</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
