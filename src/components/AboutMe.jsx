import React from "react";
import Me from "/src/assets/me.png";
const AboutMe = () => {
  return (
    <div className="about-wrapper">
      <h1 className="about-header">About Me:</h1>
      <p className="about-main">
        Argentinian born in 1990 fluent in Spanish (native) and English. <br />
        Completed the <strong>University of Buenos Aires</strong>`s{" "}
        <em>Front-End Developer Junior </em>
        course and <strong>Educado en Argentina</strong>`s{" "}
        <em>Front-End Web Development</em> in 2023 (both from Argentina Programa
        4.0). <br />
      </p>
      <p className="about-main-cuote">
        "I view web development as a dynamic canvas where creativity meets
        functionality, allowing me to bring dreams to life in the digital
        realm."
      </p>
      <img src={Me} alt="my profile picture" className="about-img" />
    </div>
  );
};

export default AboutMe;
