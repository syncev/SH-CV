import { useEffect, useState, useRef } from "preact/hooks";
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "/src/assets/logo.png";
import arrow from "/src/assets/icons/backarrow-nb.png";
import goBtn from "/src/assets/icons/go-no-bg.png";

const Myprojects = ({pageLoaded}) => {
  const [reposByDate, setReposByDate] = useState([]);
  const [reposByUpdate, setReposByUpdate] = useState([]);
  const [covers, setCovers] = useState([])
  const [atTop, setAtTop] = useState(true);
  const navigate = useNavigate();
  const username = "syncev";
  const firstRepo = reposByDate[0]; //to ensure i find the first repo for the latest repo part

  const fetchCoverCalledRef = useRef(false)

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
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const fetchCover = async () => {
      const coversArray = await Promise.all(
        reposByUpdate.map(async (repo) => {
          const response = await fetch(
            `https://api.github.com/repos/syncev/${repo.name}/contents/cover.png`
            );
            const cover = await response.json();
            return cover.download_url;
          })
          );
          setCovers(coversArray);

        
        
        
    }
    if(pageLoaded && reposByUpdate.length > 0 && !fetchCoverCalledRef.current){
      fetchCoverCalledRef.current= true;
      fetchCover();
    }
  }, [ pageLoaded, reposByUpdate])
  // const handleBackBtn = () => {
  //   if (!atTop) {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   } else {
  //     navigate("/SH-CV/");
  //   }
  // };

  

  return (
    <section id="myProjects-section">
      <div className="title-wrapper">
        <h2 className="portfolio-header pageTitleFont">My Portfolio</h2>
        <p className="portfolio-header-faded pageTitleFont">My Portfolio</p>
      </div>

      <div className="projects-wrapper">
        {firstRepo ? (
          <div key={firstRepo.id} className="latestProject-wrapper">
            <div className="latestProject-Top">
              <iframe src={firstRepo.homepage} title={firstRepo.name} />
              <h3 className="latestProject-title">
                {firstRepo.name || "Nada"}
              </h3>
            </div>

            <div className="latestProject-Bottom">
              <p className="latestProject-description">
                {firstRepo.description || "No description provided"}
              </p>
              <a
                className="latestProject-goBtn"
                href={firstRepo.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={goBtn} alt="" />
              </a>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
          )}

        {/* <div className="otherProjects-wrapper">
          {covers.map((cover, index) => (
            <div key={index}>
              <img src={cover} alt={`cover ${index}`} />
              <h2>this is the cover {index} </h2>
            </div>
          ))}
        </div> */}


        <div className="allProjects-wrapper">
        {reposByUpdate.map((repo, index) =>
           (
            <div key={repo.id} className={` otherProjects-wrapper`}>
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
                <img src={covers[index]} alt={`cover ${index}`} />
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
          ) 
        )}
        </div>
      </div>

    </section>
  );
};

export default Myprojects;
