import React from "react";
import "../styles/AboutMe.scss";
import {contentLanguage} from "./Content.jsx";
import { useContext } from "react";
import { LanguageContext } from "./Welcome";
const AboutMe = () => {
  const {languageValue, setLanguageValue} = useContext(LanguageContext);
  return (
    <section className="aboutMe-section" id={"aboutMe-section"}>
      <div className="title-wrapper">
        <h2 className="about-header "> {contentLanguage[languageValue].about.title} </h2>
      </div>
      <div className="p1-container">
        <span className="underscore">______</span>
        <div className="p2-container">
          <p className="aboutMe-text p1">
          {contentLanguage[languageValue].about.p1a} <span>{contentLanguage[languageValue].about.p1b}</span> {contentLanguage[languageValue].about.p1c} 
          </p>
          <p className="aboutMe-text p2">
          {contentLanguage[languageValue].about.p2a} 
          <span>{contentLanguage[languageValue].about.p2b}</span>
          {contentLanguage[languageValue].about.p2c}
          </p>
        </div>
      </div>

      <div className="quote-container">
        <p className="quote">
          "{contentLanguage[languageValue].about.p3a} <span>{contentLanguage[languageValue].about.p3b}</span>{contentLanguage[languageValue].about.p3c} <span>{contentLanguage[languageValue].about.p3d}</span>."{" "}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
