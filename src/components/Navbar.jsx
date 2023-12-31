import React, { useState } from "react";
import buttonImg from '/src/assets/icons/menu.svg'
import {Link} from "react-router-dom"

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
      <nav className="nav">
        <Link to="/SH-CV/" className="site-logo">
          S. Hernandez WebDev
        </Link>
        <button className={`btn-menu ${toggleMenu ? "btnOut": ""} `} onClick={menuToggle}>
          <img src={buttonImg} />{" "}
        </button>
      </nav>
      {/* nav links */}
      <div className="ul-wrapper">
        <ul className={`nav-ul ${toggleMenu ? "" : "menuOut"}`}>
          
          <li>
            <Link to="/SH-CV/projects" onClick={btnHandler}>My Projects</Link>
          </li>
          <hr />
          <li>
            <Link to="/SH-CV/about" onClick={btnHandler}>About Me</Link>
          </li>
          <hr />
          <li>
            <Link to="/SH-CV/contact" onClick={btnHandler}>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
