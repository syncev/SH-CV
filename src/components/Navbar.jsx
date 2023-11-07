import React, { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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
          <img src="/src/assets/icons/menu.svg" />{" "}
        </button>
      </nav>
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
