import React, { useState, useEffect, useRef } from "react";
import meNormal from "../assets/me.png";
import meMuppet from "../assets/meMuppet.png";
import meClay from "../assets/meClay.png";
import meAnime from "../assets/meAnime.png";
import meLego from "../assets/meLego.png";

import "../styles/Greeting.scss";

import { contentLanguage } from "./Content.jsx";
import { useContext } from "react";
import { LanguageContext } from "./Welcome";

const Greeting = () => {
  const { languageValue, setLanguageValue } = useContext(LanguageContext);
  const [myImg, setMyImg] = useState(meNormal);
  const hasCrossedRef = useRef(false);
  const threshold = window.innerHeight * 0.8;

  const changeImage = () => {
    const image = [meNormal, meMuppet, meClay, meAnime, meLego];
    setMyImg(image[Math.floor(Math.random() * image.length)]);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        if (!hasCrossedRef.current) {
          changeImage();
          hasCrossedRef.current = true; // only triggers once per scroll below
        }
      } else {
        hasCrossedRef.current = false; // reset when scrolling back up
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="greeting-wrapper">
      <div className="text-btn-wrapper">
        <h1 className="greeting-title-wrapper">
          <span className="greeting-title-hi">
            {contentLanguage[languageValue].greeting.hi}
          </span>
          <br />
          <span className="greeting-title-name">
            {contentLanguage[languageValue].greeting.name}
          </span>
          <br />
          <span className="greeting-title-dev">
            {contentLanguage[languageValue].greeting.dev}
          </span>
        </h1>
        <div className="btn-wrapper">
          <a className="single-button-wrapper" href="#certificates-section">
            <p className="certificate-btn">
              {contentLanguage[languageValue].greeting.btnCertif}
            </p>
          </a>
          <a className="single-button-wrapper" href="#myProjects-section">
            <p className="projects-btn">
              {contentLanguage[languageValue].greeting.btnProjects}
            </p>
          </a>
        </div>
      </div>

      <div className="me-wrapper">
        <img src={myImg} alt="" />
      </div>
    </div>
  );
};

export default Greeting;
