import { useEffect } from "preact/hooks";
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import logo from "/src/assets/logo.png";
import arrow from "/src/assets/icons/backarrow-nb.png";
import goBtn from "/src/assets/icons/go-no-bg.png";
// import Myprojects from "./Myprojects";

const MyProjects = () => {
  const [reposByDate, setReposByDate] = useState([]);
  const [reposByUpdate, setReposByUpdate] = useState([]);
  const [atTop, setAtTop] = useState(true);
  const navigate = useNavigate()
  const username = "syncev";

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const data = await response.json();
      //filter and sort by date created
      const filteredReposByDate = data
        .filter(
          (repo) =>
            repo.homepage && repo.homepage !== "" && repo.name !== "SH-CV"
        )
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

      setReposByDate(filteredReposByDate);

      //filter so the most recent project created is not on the list and sort by date updated
      const filteredReposByUpdate = filteredReposByDate

        .filter(
          (repo, index) =>
            repo.homepage &&
            repo.homepage !== "" &&
            repo.name !== "SH-CV" &&
            index !== 0
        )
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

      setReposByUpdate(filteredReposByUpdate);
    };

    fetchRepos();

    const handleScroll = () => {
      setAtTop(window.scrollY <= 12);
    }
    window.addEventListener('scroll',handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    
  }, [username]);
  const handleBackBtn= () => {
    if(!atTop){
      window.scrollTo({
        top: 0,
      behavior: "smooth"})
    } else {
      navigate('/SH-CV/')
    }
  }
  
  const firstRepo = reposByDate[0]; //to ensure i find the first repo for the latest repo part

  
  return (
    <div className="repo-wrapper">
      <div className="hero">
        <div className="hero-shade"></div>
        <div className="projects-nav">
          <button className="projects-back-btn" onClick={handleBackBtn} >
            <img src={arrow} alt="" />
          </button>
          <div className="logo-name-container">
            <h1 className="projects-name mainFont boldFont">S. HERNANDEZ</h1>
            <img className="projects-logo" src={logo} alt="" />
          </div>
        </div>

        <h2 className="projects-header pageTitleFont">PORTFOLIO</h2>
        {firstRepo ? (
          <div className="latest-repo">
            <div key={firstRepo.id} className="projectWrapper">
              <div className="iframe-container">
                <div className="latest-repo-gradient">
                  <h3 className="projectTitlesFont">
                    {firstRepo.name || "Nada"}
                  </h3>
                </div>
                <div className="latest-project-tag pageTitleFont">
                  LATEST PROJECT
                </div>
                <iframe src={firstRepo.homepage} title={firstRepo.name} />
              </div>
              <div className="info-container">
                <p className="projectInfo">
                  {firstRepo.description || "No description provided"}
                </p>
                <a
                  className="goBtn"
                  href={firstRepo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={goBtn} alt="" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div className="repo">
        {reposByUpdate.map((repo, index) =>
          repo !== firstRepo ? (
            <div key={repo.id} className={` projectWrapper`}>
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  index % 2 === 0
                    ? index + " leftIframe"
                    : index + " rightIframe"
                } iframe-container `}
              >
                <iframe src={repo.homepage} title={repo.name} />
              </a>
              <div
                className={`${
                  index % 2 === 0
                    ? index + " leftProject"
                    : index + " rightProject"
                } info-container`}
              >
                <h3 className="projectTitle projectTitlesFont">
                  {repo.name || "Nada"}
                </h3>
                <p className="projectInfo ">
                  {repo.description || "No description provided"}
                </p>
                <a
                  className="goBtn projectInfo"
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project <span className="project-arrow">&#8594;</span>
                </a>
              </div>
            </div>
          ) : (
            <div></div>
          )
        )}
      </div>
    </div>
  );
};

{
}

{
  /* {repos.map((repo, index) => (
    <div key={repo.id} className={index === 0 ? "repo latestProject" : "repo"}>
    <div className="iframe-container ">
    <iframe
    src={repo.homepage}
    title={repo.name}
            />
          </div>
          
            <h2>{repo.name || 'Nada'}</h2>
            <p>{repo.description || 'No description provided'}</p>
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer"> View Project</a>
          </div>
        ))
      } */
}

export default MyProjects;
