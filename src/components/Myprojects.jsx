import { useEffect, useState, useRef } from "preact/hooks";
import React from "react";

import coopFinder from "/src/assets/coop-finder.png";
import kittyCutieCorner from "/src/assets/kitty cutie corner.png";
import ilMaterello from "/src/assets/il materello.png";
import crippaService from "/src/assets/crippa service.png";
import toDoList from "/src/assets/to do list.png";
import colorPicker from "/src/assets/color picker.png";

import "../styles/Myprojects.scss";

import { useContext } from "react";
import { LanguageContext } from "./Welcome";

const Myprojects = () => {
  const githubPages = "https://syncev.github.io/";

  const { languageValue, setLanguageValue } = useContext(LanguageContext);

  const projects = [
    {
      title: "Co-op Compass",
      description: {
        en: "Project that accesses a Games API and only returns co-op games that can be filtered by the user",
        es: "Proyecto que accede a una API de juegos y devuelve solo juegos cooperativos que pueden filtrarse por el usuario.",
      },
      img: coopFinder,
      link: `${githubPages}co-op-compass/`,
    },
    {
      title: "Kitty Cutie Corner",
      description: {
        en: "A simple website that allows users to see random cat images, add them to a favorite list, delete them and add their own to the API.",
        es: "Un sitio web simple que permite a los usuarios ver imágenes aleatorias de gatos, agregarlas a una lista de favoritos, eliminarlas y agregar las propias a la API.",
      },
      img: kittyCutieCorner,
      link: `${githubPages}Kitty-Cutie-Corner/`,
    },
    {
      title: "Il Materello",
      description: {
        en: "Responsive restaurant site inspired by a real pasta place. Features modern layout and clean UI.",
        es: "Sitio web responsive de restaurante inspirado en una verdadera casa de pastas. Cuenta con diseño moderno y una interfaz limpia.",
      },
      img: ilMaterello,
      link: `${githubPages}Il-Matterello/`,
    },
    {
      title: "Crippa Service",
      description: {
        en: "Business website mockup for a maintenance service. Simple and effective interface.",
        es: "Mockup de sitio web empresarial para un servicio de mantenimiento. Interfaz simple y efectiva.",
      },
      img: crippaService,
      link: `${githubPages}Crippa-Service/`,
    },
    {
      title: "To-Do List",
      description: {
        en: "React-based to-do list app. Allows adding, deleting and toggling tasks.",
        es: "App de lista de tareas basada en React. Permite agregar, eliminar y alternar tareas.",
      },
      img: toDoList,
      link: `${githubPages}ToDo-List/`,
    },
    {
      title: "Color Picker",
      description: {
        en: "Minimal color selection tool. Pick and copy colors to clipboard.",
        es: "Herramienta minimalista para seleccionar colores. Permite copiar colores al portapapeles.",
      },
      img: colorPicker,
      link: `${githubPages}Color-Picker/`,
    },
  ];
  
  

  return (
    <section id="myProjects-section" className="myProjects-section">
      <div className="title-wrapper">
        <h2 className="projects-header">Portfolio</h2>
      </div>

      <div className="projects-container">
        {projects.map(({ title, description, img, link }) => (
          <div className="project-wrapper" key={title}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={img} alt={title} />
              <div className="overlay">
                <h4>{title}</h4>
                <p>{description[languageValue]}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="view-more-btn-container" style={{ display: "none" }}>
        <button className="view-more-btn">View More</button>
      </div>
    </section>
  );
};

export default Myprojects;
