import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "/src/assets/logo.png";
import tecIcons from "../assets/icons/tecIcons.png";
import contactImg from "../assets/contact img.png";
import profileImg from "../assets/about me img.png";
import portfolioImg from "../assets/projects img.png";
import profileImgBig from "../assets/shapedProfile.png";

import AboutMe from "../components/AboutMe";
import Myprojects from "./Myprojects";

const Welcome = () => {
  const deviceWidth = window.innerWidth;
  const tabletWidth = 768;
  const navigate = useNavigate();
  //a state and effect that on load changes the state once, from false to true, and since this happens when the page loads, this state basically tells if the page finished loading
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setPageLoaded(true);
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (pageLoaded && element) {
      element.scrollIntoView({ behavior: "smooth" });
      navigate(`#${id}`);

    } 
  };

  return (
    <div className="page-wrapper">
      <section className={`welcome-section `} id="welcome-section">
        <div className="blur-background">
          <div className="logo-wrapper">
            <img className="logo-img" src={logo} alt="Logo" />
            <h1 className={`logo-name pageTitleFont `}>S. HERNANDEZ</h1>
          </div>
          <div className="description-wrapper">
            <p className={`description-title mainFont `}>
              <em>FRONT END </em> <br />
              <strong>DEVELOPER</strong>
            </p>
            <div className="icon-wrapper">
              <img src={tecIcons} alt="tecnology icon" />
            </div>
            <div className={`nav-div`}>
              <Link className="btnHero" onClick={() => handleScroll("aboutMe-section")} >
                <img src={contactImg} alt="" />
                <p className="pageTitleFont">Contact</p>
              </Link>
              <Link className="btnHero middleBtn" onClick={() => handleScroll("aboutMe-section")}>
                <p className="pageTitleFont">About Me</p>
                <img src={profileImg} alt="" />
              </Link>
              <Link className="btnHero" onClick={() => handleScroll("aboutMe-section")}>
                <img src={portfolioImg} alt="" />
                <p className="pageTitleFont"> Portfolio</p>
              </Link>
            </div>
          </div>
          <div className="hero-shade"></div>
        </div>
      </section>

     

      <AboutMe/>
      <Myprojects pageLoaded={pageLoaded} />
    </div>
  );
};

export default Welcome;
