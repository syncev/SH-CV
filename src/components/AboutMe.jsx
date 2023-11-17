import React from "react";
import Me from "/src/assets/me.png";
const AboutMe = () => {
  return (
    <div className="about-wrapper">
      <h1 className="about-header">About Santiago Hernandez</h1>

      <p>
        Argentinian born in 1990. <br />
        Speaks Spanish (native) and English fluently. <br />
        Completed the University of Buenos Aires`s Front-End Developer Junior
        course and Educado en Argentina`s Front-End Web Development in 2023
        (both from Argentina Programa 4.0). <br />I view web development as a
        dynamic canvas where creativity meets functionality, allowing me to
        bring dreams to life in the digital realm.
      </p>
      <img src={Me} alt="my profile picture" className="profile-img" />
    </div>
  );
};

export default AboutMe;
