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
        <div className="projects-container">
          <div className="project-wrapper">
            <a href={`${githubPages}co-op-compass/`} target="_blank">
              <img src={coopFinder} alt="" />
              <div className="overlay">
                <h4>Co-op Compass</h4>
                <p>
                  API project that accesses a Games API and only returns co-op
                  games that can be filtered by the user
                </p>
              </div>
            </a>
          </div>
          <div className="project-wrapper">
            <a href={`${githubPages}Kitty-Cutie-Corner/`} target="_blank">
              <img src={kittyCutieCorner} alt="" />
              <div className="overlay">
                <h4>Kitty Cutie Corner</h4>
                <p>
                 A simple website that allows users to see random cat images, add them to a favorite list and delete them.
                </p>
              </div>
            </a>
          </div>
          <div className="project-wrapper">
            <a href={`${githubPages}Il-Matterello/`} target="_blank">
              <img src={ilMaterello} alt="" />
              <div className="overlay">
                <h4>Il Materello</h4>
                <p>
                  Responsive restaurant site inspired by a real pasta place.
                  Features modern layout and clean UI.
                </p>
              </div>
            </a>
          </div>
          <div className="project-wrapper">
            <a href={`${githubPages}Crippa-Service/`} target="_blank">
              <img src={crippaService} alt="" />
              <div className="overlay">
                <h4>Crippa Service</h4>
                <p>
                  Business website mockup for a maintenance service. Simple and
                  effective interface.
                </p>
              </div>
            </a>
          </div>
          <div className="project-wrapper">
            <a href={`${githubPages}ToDo-List/`} target="_blank">
              <img src={toDoList} alt="" />
              <div className="overlay">
                <h4>To-Do List</h4>
                <p>
                  React-based to-do list app. Allows adding, deleting and
                  toggling tasks with local storage support.
                </p>
              </div>
            </a>
          </div>
          <div className="project-wrapper">
            <a href={`${githubPages}Color-Picker/`} target="_blank">
              <img src={colorPicker} alt="" />
              <div className="overlay">
                <h4>Color Picker</h4>
                <p>
                  Minimal color selection tool using React state. Pick and copy
                  colors to clipboard.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="view-more-btn-container" style={{ display: "none" }}>
        <button className="view-more-btn">View More</button>
      </div>
    </section>
  );
};

export default Myprojects;
