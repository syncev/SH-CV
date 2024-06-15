import React, { useState } from "react";
import buttonImg from '/src/assets/icons/menu.svg'
import {Link} from "react-router-dom"
import MyProjectsBtn from './MyProjectsBtn';
import tecIcons from "/src/assets/icons/tecIcons.png";

const Navbar = () => {
  //state for tracking if menuOut className is toggle (used in mobile)
  const [toggleMenu, setToggleMenu] = useState(false);
  //changes the state to its current opposite
  const menuToggle = (e) => {
    setToggleMenu(!toggleMenu);
  };

  const btnHandler = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <header>
      
      <div className="ul-wrapper">
        <ul className={`nav-ul ${toggleMenu ? "" : "menuOut"}`}>
          <li>
          <img className="tecIcons" src={tecIcons} alt="" />
          </li>
          <hr />
          <li className="navSeparator">
            <p >_</p>
          </li>
          <hr />
          <li className="navBtnLi">
            <Link to="/SH-CV/about" onClick={btnHandler}>About Me</Link>
          </li>
          <hr />
          <li className="navBtnLi">
            <Link to="/SH-CV/contact" onClick={btnHandler}>Let`s work together</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
