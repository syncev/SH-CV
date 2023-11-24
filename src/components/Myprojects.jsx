import React from "react";
import toDoNew from "/src/assets/To Do List New.png";
import italRest from "/src/assets/Italian Restaurant LP.jpeg";
import crippa from "/src/assets/Crippa Service.jpeg";
import colorPicker from "/src/assets/Color Picker.jpeg";

//this needs to be properly destructuring by using the {}
const Myprojects = ({ counter, setListLength }) => {
  const projectsArr = [
    {
      link: "https://il-matterello.vercel.app/",
      cover: italRest,
    },
    {
      link: "https://crippa-service.vercel.app/",
      cover: crippa,
    },
    {
      link: "https://lista-tareas-five.vercel.app/",
      cover: toDoNew,
    },
    {
      
      link: "https://color-picker-five-tau.vercel.app/",
      cover: colorPicker,
    },
  ];
  //set the list length for Appgallery to know the limit of the list
  setListLength(projectsArr.length);
  
  //whatever i put as projects dont matter, the important thing is that i have .link afterwards in the src so it looks for the key "link".
  //i Dont need to pass the counter props here, it has access with or without it
  const listCreator = () => {
    return projectsArr.map((projects, index) => (
      <li
        key={index}
        className={`app-item ${index === counter ? "currentScroll" : ""}`}
      >
        <a href={projects.link}>
          <img src={projects.cover} alt="" />
        </a>
      </li>
    ));
  };
  return <ul className="apps-list">{listCreator(counter)}</ul>;
};
export const getProjectsArrLength = (projectsArr) => {
  return projectsArr.length;
};
export default Myprojects;
