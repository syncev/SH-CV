import React from "react";
import "../styles/AboutMe.scss";
const AboutMe = ({ handleScroll }) => {
  return (
    <section className="aboutMe-section" id={"aboutMe-section"}>
      <div className="title-wrapper">
        <h2 className="about-header "> About Me </h2>
      </div>
      <div className="p1-container">
        <span className="underscore">______</span>
        <div className="p2-container">
          <p className="aboutMe-text p1">
            Hi, my name is Santiago Hernandez, I've been actively learning web
            development since 2021 and graduated as <span>Frontend Developer</span> from the
            Argentina Programa 4.0 Front End Development course in 2023. Since
            then, I've been continuously expanding my knowledge by taking
            various online courses and building personal projects to sharpen my
            skills and explore new technologies.
          </p>
          <p className="aboutMe-text p2">
            I'm currently aiming to become a <span>Software Developer</span>, and I’m
            committed to growing both technically and professionally to reach
            that goal.
          </p>
        </div>
      </div>

      <div className="quote-container">
        <p className="quote">
          "I wasn't born <span>knowing</span>, but I was born willing to <span>learn</span>."{" "}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
