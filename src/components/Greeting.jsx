import React from "react";
import meNormal from "../assets/me.png";
import "../styles/Greeting.scss";

const Greeting = () => {
  return (
    <div className="greeting-wrapper">
      <div className="text-btn-wrapper">
        <h1 className="greeting-title-wrapper">
          <span className="greeting-title-hi">Hi, I'm</span>
          <br />
          <span className="greeting-title-name">Santiago Hernandez</span>
          <br />
          <span className="greeting-title-dev">a Front-End Developer</span>
        </h1>
        <div className="btn-wrapper">
          <a className="single-button-wrapper"  href="#certificates-section">
            <p className="certificate-btn">
              Certificates
            </p>
          </a>
          <a className="single-button-wrapper" href="#myProjects-section">
            <p className="projects-btn" >
              Projects
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
