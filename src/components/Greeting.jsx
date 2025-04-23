import React from "react";
import meNormal from "../assets/me.png";
import "../styles/Greeting.scss";

import {contentLanguage} from "./Content.jsx";
import { useContext } from "react";
import { LanguageContext } from "./Welcome";

const Greeting = () => {

  const {languageValue, setLanguageValue} = useContext(LanguageContext);
  return (
    <div className="greeting-wrapper">
      <div className="text-btn-wrapper">
        <h1 className="greeting-title-wrapper">
          <span className="greeting-title-hi">{contentLanguage[languageValue].greeting.hi}</span>
          <br />
          <span className="greeting-title-name">{contentLanguage[languageValue].greeting.name}</span>
          <br />
          <span className="greeting-title-dev">{contentLanguage[languageValue].greeting.dev}</span>
        </h1>
        <div className="btn-wrapper">
          <a className="single-button-wrapper"  href="#certificates-section">
            <p className="certificate-btn">
            {contentLanguage[languageValue].greeting.btnCertif}
            </p>
          </a>
          <a className="single-button-wrapper" href="#myProjects-section">
            <p className="projects-btn" >
            {contentLanguage[languageValue].greeting.btnProjects}
            </p>
          </a>
        </div>
      </div>

      <div className="me-wrapper">
        <img src={meNormal} alt="" />
      </div>
    </div>
  );
};

export default Greeting;
