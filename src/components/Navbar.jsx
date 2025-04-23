import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import englogo from "../assets/eng lang.png";
import esplogo from "../assets/esp lang.png";
import arrow from "../assets/icons/arrow.png";
import { useContext } from "react";
import { TestContext } from "./Welcome";

import "../styles/Navbar.scss";
const Navbar = () => {
  // const deviceWidth = window.innerWidth;
  const tabletWidth = 768;
  const [deviceWidth, setCurrentDeviceWidth] = useState(window.innerWidth);
  //makes the mobile menu appear/disappear depending the current screen size
  const [arrowClass, setArrowClass] = useState("");
  const [menuFrame, setMenuFrame] = useState("");

  const {testValue, setTestValue} = useContext(TestContext);

  useEffect(() => {
    const handleResize = () => {
      setCurrentDeviceWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  function menuHandler() {
    document.getElementById("nav-ul").classList.toggle("active");
    // document.getElementById("menu-img").classList.toggle("active");
  }
  function languageHandler(lang) {
    setTestValue(lang);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setArrowClass("up-arrow");
        setMenuFrame("frame");
      } else {
        setArrowClass("");
        setMenuFrame("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Run it once on mount in case the page is already scrolled

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="navbar" id="navbar">
      <div className="logo-wrapper">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="ul-wrapper">
        {deviceWidth < tabletWidth && (
          <div
            id="menu-icon"
            className={`menu-icon ${menuFrame}`}
            onClick={menuHandler}
          >
            <svg
              class="hb"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10 10"
              stroke="#F5C169"
              stroke-width=".8"
              fill="rgba(0,0,0,0)"
              stroke-linecap="round"
              style="cursor: pointer"
            >
              <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
                <animate
                  dur="0.2s"
                  attributeName="d"
                  values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
                  fill="freeze"
                  begin="start.begin"
                />
                <animate
                  dur="0.2s"
                  attributeName="d"
                  values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
                  fill="freeze"
                  begin="reverse.begin"
                />
              </path>
              <rect width="10" height="10" stroke="none">
                <animate
                  dur="2s"
                  id="reverse"
                  attributeName="width"
                  begin="click"
                />
              </rect>
              <rect width="10" height="10" stroke="none">
                <animate
                  dur="0.001s"
                  id="start"
                  attributeName="width"
                  values="10;0"
                  fill="freeze"
                  begin="click"
                />
                <animate
                  dur="0.001s"
                  attributeName="width"
                  values="0;10"
                  fill="freeze"
                  begin="reverse.begin"
                />
              </rect>
            </svg>
          </div>
        )}
        <ul
          id="nav-ul"
          className={`nav-ul  ${
            deviceWidth < tabletWidth ? "nav-ul-mobile" : ""
          }`}
        >
          <li className="navBtnLi">
            <a href="#aboutMe-section" id="aboutMe" className="navLink">
              About
            </a>
          </li>
          <li className="navBtnLi">
            <a href="#myProjects-section" className="navLink" id="portfolio">
              Portfolio
            </a>
          </li>
          <li className="navBtnLi">
            <a href="#contact-section" id="contact" className="navLink">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="language-wrapper">
        <div onClick={() => languageHandler("en")}>
          <img src={englogo} alt="" />
          <p>EN</p>
        </div>
        <p> - </p>
        <div onClick={() => languageHandler("es")}>
          <p>ES</p>
          <img src={esplogo} alt="" />
        </div>
      </div>
      <div className="arrow-container">
        <a href="#" className="arrow-anchor">
          <img src={arrow} alt="arrow" className={`arrow ${arrowClass} `} />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
