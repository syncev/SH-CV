import React, { useState, useEffect, lazy } from "react";
import { Link, useNavigate } from "react-router-dom";

import logo from "/src/assets/logo.png";
import contactImg from "../assets/pinecone.png";
import profileImg from "../assets/me expanded.png";
import portfolioImg from "../assets/forest.png";

import AboutMe from "../components/AboutMe";
import Myprojects from "./Myprojects";
import Contact from "./Contact";
import Loading from "./Loading";

import GitImg from "../assets/icons/github.png";
import LinkedinImg from "../assets/icons/linkedinNewNB.png"
import Navbar from "./Navbar";



const Welcome = () => {
  const deviceWidth = window.innerWidth;
  const tabletWidth = 768;
  const navigate = useNavigate();
  //a state and effect that on load changes the state once, from false to true, and since this happens when the page loads, this state basically tells if the page finished loading
  

  
  

  return (
    <div className="page-wrapper">
      <Navbar />
      <Myprojects />
    </div>
  );
};

export default Welcome;
