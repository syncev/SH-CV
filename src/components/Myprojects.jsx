import React from "react";
import img1 from '/src/assets/cat1.png'
import img2 from '/src/assets/cat2.jpg'
import img3 from '/src/assets/cat3.jpg'
//this needs to be properly destructuring by using the {}
const Myprojects = ({counter}) => {
  const projectsArr = [
    {
      index: 1,
      link: img1,
    },
    {
      index: 2,
      link: img2,
    },
    {
      index: 3,
      link: img3,
    },
  ];
  //whatever i put as projects doesnt matter, the important thing is that i have .link afterwards in the src so it looks for the key "link".
  //i Dont need to pass the counter props here, it has access with or without it 
  const listCreator = () => {
    return projectsArr.map((projects, index) => (
      <li
        key={index}
        className={`app-item ${
          index  === counter ? "currentScroll" : ""
        }`}
      >
        <img src={projects.link} alt="" />
      </li>
    ))

  }
  return (
    <ul className="apps-list">
      {listCreator(counter)}
    </ul>
  );
};

export default Myprojects;
