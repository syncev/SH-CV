import React from "react";
import { Link } from "react-router-dom";
import profileImgBig from "../assets/me expanded.png";
const AboutMe = ({handleScroll}) => {
  return (
    <section className="aboutMe-section" id={"aboutMe-section"}>
    <div className="title-wrapper">
      <h2 className="about-header pageTitleFont"><span className="header-highlight"> About </span> Me</h2>
      <p className="about-header-faded pageTitleFont">About Me</p>
    </div>
    <div className="content-wrapper">
      <p className="aboutMe-text t1 pageTitleFont">
      Hi, my name is Santiago Hernandez, I've been actively learning web development since 2021 and graduated as Frontend Developer Jr from the Argentina Programa 4.0 Front End Development course in 2023  .
      </p>
      <div className="t2-container">
      <p className="aboutMe-text t2 pageTitleFont ">
      I am a proactive and organized individual with strong interpersonal skills. I enjoy taking on challenges, acquiring new skills, and collaborating in teams. My journey in web development includes hands-on experience with React, where I've developed a portfolio of projects that showcase the technologies I’ve learned so far.
      </p>

      </div>
      <p className="aboutMe-text t3 pageTitleFont">
      As a native Spanish speaker and fluent in English (C1 level), I am well-equipped to work in diverse environments. I am committed to always finding a way to achieve effective solutions while prioritizing the project’s goals. I look forward to applying my skills to meaningful projects. You will find my work in the section below :) .
      
      </p>
      <div className="aboutImg-wrapper">
        <img
          src={profileImgBig}
          alt="my profile picture"
          className="about-img"
        />
      </div>
    </div>
    <div className="aboutMe-actionCall ">
      <h2 className="pageTitleFont">Have any <br/> Questions?</h2>
      <Link className="aboutMe-btn pageTitleFont" onClick={() => handleScroll("contact-section")}>
        Get in Touch
      </Link>
    </div>
  </section>
  );
};

export default AboutMe;
