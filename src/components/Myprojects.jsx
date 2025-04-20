import { useEffect, useState, useRef } from "preact/hooks";
import React from "react";

import coopFinder from "/src/assets/coop-finder.png";
import kittyCutieCorner from "/src/assets/kitty cutie corner.png";
import ilMaterello from "/src/assets/il materello.png";
import crippaService from "/src/assets/crippa service.png";
import toDoList from "/src/assets/to do list.png";
import colorPicker from "/src/assets/color picker.png";

import "../styles/Myprojects.scss";

const Myprojects = () => {
  const githubPages = "https://syncev.github.io/";

  return (
    <section id="myProjects-section" className="myProjects-section">
      <div className="title-wrapper">
        <h2 className="projects-header ">Portfolio</h2>
      </div>
      <div className="projects-container">
        <div className="project-wrapper">
          <a href={`${githubPages}co-op-compass/`} target="_blank">
            <img src={coopFinder} alt="" />
          </a>
        </div>
        <div className="project-wrapper">
          <a href={`${githubPages}Kitty-Cutie-Corner/`} target="_blank">
            <img src={kittyCutieCorner} alt="" />
          </a>
        </div>
        <div className="project-wrapper">
          <a href={`${githubPages}Il-Matterello/`} target="_blank">
            <img src={ilMaterello} alt="" />
          </a>
        </div>
        <div className="project-wrapper">
          <a href={`${githubPages}Crippa-Service/`} target="_blank">
            <img src={crippaService} alt="" />
          </a>
        </div>
        <div className="project-wrapper">
          <a href={`${githubPages}ToDo-List/`} target="_blank">
            <img src={toDoList} alt="" />
          </a>
        </div>
        <div className="project-wrapper">
          <a href={`${githubPages}Color-Picker/`} target="_blank">
            <img src={colorPicker} alt="" />
          </a>
        </div>
      </div>
      <div className="view-more-btn-container" style={{display:"none"}}>
        <button className="view-more-btn">View More</button>
      </div>
    </section>
  );
};

export default Myprojects;
