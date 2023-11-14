import React, { useState } from "react";
import buttonImg from '/src/assets/icons/menu.svg'

const Navbar = () => {
  //state for tracking if menuOut className is toggle (used in mobile)
  const [toggleMenu, setToggleMenu] = useState(false);
  //changes the state to its current opposite
  const menuToggle = (e) => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header>
      <nav className="nav">
        <a href="" className="site-logo">
          S. Hernandez WebDev
        </a>
        <button className={`btn-menu ${toggleMenu ? "btnOut": ""} `} onClick={menuToggle}>
          <img src={buttonImg} />{" "}
        </button>
      </nav>
      {/* nav links */}
      <div className="ul-wrapper">
        <ul className={`nav-ul ${toggleMenu ? "" : "menuOut"}`}>
          <hr />
          <li>
            <a href="">My Projects</a>
          </li>
          <hr />
          <li>
            <a href="">About Me</a>
          </li>
          <hr />
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
