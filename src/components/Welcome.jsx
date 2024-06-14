import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import MyProjectsBtn from "./MyProjectsBtn";

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
              <img className="logo-img" src="./src/assets/logo.png" alt="" />
            </div>
            <div className="social-wrapper">
              <img className="socialBtn1" src="/src/assets/facebook-icon.png" alt="" />
              <img className="socialBtn2" src="/src/assets/linkedin-icon.png" alt="" />
              <img className="socialBtn3" src="/src/assets/ig-icon.png" alt="" />
              <img className="socialBtn4" src="/src/assets/mail-icon.png" alt="" />
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
