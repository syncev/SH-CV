import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "/src/assets/logo.png";
import tecIcons from "../assets/icons/tecIcons.png";
import contactImg from "../assets/pinecone.png";
import profileImg from "../assets/me expanded.png";
import portfolioImg from "../assets/forest.png";
import profileImgBig from "../assets/shapedProfile.png";

import AboutMe from "../components/AboutMe";
import Myprojects from "./Myprojects";
import Contact from "./Contact";

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
  }, [deviceWidth]);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (pageLoaded && element) {
      const currentPosition = window.scrollY;
      const elementPosition =
        element.getBoundingClientRect().top + currentPosition;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
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
            {deviceWidth < tabletWidth ? (
              <div className="title-text-wrapper">
                <p className={`description-title mainFont `}>
                  <em>FRONT END </em>
                  <strong>DEVELOPER</strong>
                </p>
              </div>
            ) : (
              <div className="title-text-wrapper">
                <p className={`description-title mainFont `}>
                  FRONT END <br />
                  <strong>DEVELOPER</strong>
                </p>
                <div className="description-text pageTitleFont">
                  <p>USER-CENTRIC DESIGN</p>
                  <p>INTERACTIVE WEB SOLUTIONS</p>
                  <p>COLLABORATIVE APPROACH</p>
                </div>
              </div>
            )}

            <div className={`nav-div`}>
              <div className="btn-wrapper contactBtn-wrapper">
                <p className="pageTitleFont">Contact</p>
                <Link
                  className="btnHero contactBtn"
                  onClick={() => handleScroll("contact-section")}
                >
                  <img src={contactImg} alt="" />
                </Link>
              </div>
              <div className="btn-wrapper projectsBtn-wrapper">
                <Link
                  className="btnHero projectsBtn"
                  onClick={() => handleScroll("myProjects-section")}
                >
                  <img src={portfolioImg} alt="" />
                </Link>
                <p className="pageTitleFont"> Portfolio</p>
              </div>
              <div className="btn-wrapper aboutMeBtn-wrapper">
                <p className="pageTitleFont">About Me</p>
                <Link
                  className="btnHero aboutMeBtn"
                  onClick={() => handleScroll("aboutMe-section")}
                >
                  <img src={profileImg} alt="" />
                </Link>
              </div>
             
            </div>
          </div>
          <div className="hero-shade"></div>
        </div>
      </section>

      <AboutMe handleScroll={handleScroll} />
      <Myprojects pageLoaded={pageLoaded} />
      <Contact />
      <footer className="footer">
        <div className="footer-socialIcons">
          <a
            href="https://github.com/syncev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img1"
              src="/src/assets/icons/github.png"
              alt="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/san-hernandez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="img2"
              src="/src/assets/icons/linkedinNewNB.png"
              alt="Linkedin"
            />
          </a>
        </div>
        <ul className="footerNav-wrapper">
          <li className="footer-link pageTitleFont">
            <a onClick={() => handleScroll("welcome-section")}> Main </a>
          </li>
          <li>
            <a
              className="footer-link pageTitleFont"
              onClick={() => handleScroll("aboutMe-section")}
            >
              {" "}
              About Me{" "}
            </a>
          </li>
          <li>
            <a
              className="footer-link pageTitleFont"
              onClick={() => handleScroll("myProjects-section")}
            >
              Portfolio
            </a>
          </li>
        </ul>
        <p className="footer-text">Made by S. Hernandez.</p>
      </footer>
    </div>
  );
};

export default Welcome;
