import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import MyProjectsBtn from "./MyProjectsBtn";

import logo from "../assets/logo.png";
import fbIcon from "../assets/icons/fbIcon.png";
import linkedinIcon from "../assets/icons/linkedin-icon.png";
import igIcon from "../assets/icons/ig-icon.png";
import mailIcon from "../assets/icons/mail-icon.png";

const Welcome = () => {
  const deviceWidth = window.innerWidth;
  const tabletWidth = 768;
  //a state and effect that on load changes the state once, from false to true, and since this happens when the page loads, this state basically tells if the page finished loading
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <div className="welcome-wrapper">
      {deviceWidth < tabletWidth ? (
        <section className={`welcome-section `}>
          <h1 className={`welcome-greetings }`}>Front End Dev.</h1>
          <p className={`welcome-description `}>USER-CENTRIC DESIGN</p>
          <p className={`welcome-instruction `}>
            Please navigate to the desired section from the{" "}
            <strong>menu</strong>.
          </p>
        </section>
      ) : (
        <section className={`welcome-section `}>
          <div className="greetings-wrapper">
            <div className="logo-wrapper">
              <h1 className={`logo-name`}>S. HERNANDEZ</h1>
              <img className="logo-img" src={logo} alt="Logo" />
            </div>
            <div className="social-wrapper">
            <img className="socialBtn1" src={fbIcon} alt="Facebook" />
              <img className="socialBtn2" src={linkedinIcon} alt="LinkedIn" />
              <img className="socialBtn3" src={igIcon} alt="Instagram" />
              <img className="socialBtn4" src={mailIcon} alt="Email" />
            </div>
          </div>

          <div className="description-wrapper">
            <p className={`welcome-description`}>
              Front End Dev.
              <br />
              USER-CENTRIC DESIGN
              <br />
              INTERACTIVE WEB SOLUTIONS
              <br />
              COLLABORATIVE APROACH
            </p>
            <MyProjectsBtn />
          </div>

          <Navbar />
        </section>
      )}
    </div>
  );
};

export default Welcome;
