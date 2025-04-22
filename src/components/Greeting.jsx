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
          <div className="single-button-wrapper">
            <a className="certificate-btn" href="#certificates-section">
              Certificates
            </a>
          </div>
          <div className="single-button-wrapper">
            <a className="projects-btn" href="#myProjects-section">
              Projects
            </a>
          </div>
        </div>
      </div>

      <div className="me-wrapper">
        <img src={meNormal} alt="" />
      </div>
    </div>
  );
};

export default Greeting;
