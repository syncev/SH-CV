import React from "react";
import { Link } from "react-router-dom";
import profileImgBig from "../assets/shapedProfile.png";
const AboutMe = () => {
  return (
    <section className="aboutMe-section" id={"aboutMe-section"}>
    <div className="title-wrapper">
      <h2 className="about-header pageTitleFont">About Me</h2>
      <p className="about-header-faded pageTitleFont">About Me</p>
    </div>
    <div className="content-wrapper">
      <p className="aboutMe-text t1 pageTitleFont">
        Hi! I'm Santiago Hernandez, a web developer from Argentina. Since
        2022, I've been immersing myself in the world of coding, constantly
        learning and growing with each project.
      </p>
      <div className="t2-container">
      <p className="aboutMe-text t2 pageTitleFont ">
        Web development, for me, is the perfect blend of creativity and
        logic. I enjoy bringing ideas to life and solving complex problems,
        creating seamless user experiences.
      </p>

      </div>
      <p className="aboutMe-text t3 pageTitleFont">
        I'm dedicated to exploring new technologies and staying current with
        industry trends. I'm always eager to take on new challenges and push
        my boundaries.
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
      <Link className="aboutMe-btn pageTitleFont" to="/SH-CV/contact">
        Get in Touch
      </Link>
    </div>
  </section>
  );
};

export default AboutMe;
