import React from "react";
import "../styles/AboutMe.scss";
import {contentLanguage} from "./Content.jsx";
import { useContext } from "react";
import { TestContext } from "./Welcome";
const AboutMe = () => {
  const {testValue, setTestValue} = useContext(TestContext);
  return (
    <section className="aboutMe-section" id={"aboutMe-section"}>
      <div className="title-wrapper">
        <h2 className="about-header "> {contentLanguage[testValue].about.title} </h2>
      </div>
      <div className="p1-container">
        <span className="underscore">______</span>
        <div className="p2-container">
          <p className="aboutMe-text p1">
          {contentLanguage[testValue].about.p1a} <span>{contentLanguage[testValue].about.p1b}</span> {contentLanguage[testValue].about.p1c} 
          </p>
          <p className="aboutMe-text p2">
          {contentLanguage[testValue].about.p2a} 
          <span>{contentLanguage[testValue].about.p2b}</span>
          {contentLanguage[testValue].about.p2c}
          </p>
        </div>
      </div>

      <div className="quote-container">
        <p className="quote">
          "{contentLanguage[testValue].about.p3a} <span>{contentLanguage[testValue].about.p3b}</span>{contentLanguage[testValue].about.p3c} <span>{contentLanguage[testValue].about.p3d}</span>."{" "}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
