import { useEffect, useState, useRef } from "preact/hooks";
import React from "react";
import goBtn from "/src/assets/icons/js.png";

const Myprojects = ({ pageLoaded }) => {
  const [reposByDate, setReposByDate] = useState([]);
  const [reposByUpdate, setReposByUpdate] = useState([]);
  const [covers, setCovers] = useState([]);
  const [atTop, setAtTop] = useState(true);
  const username = "syncev";
  const firstRepo = reposByDate[0]; //to ensure i find the first repo for the latest repo part

  const fetchCoverCalledRef = useRef(false);

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
      const coversArray = await Promise.allSettled(
        reposByUpdate.map(async ({ name }) => {
          try {
            const response = await fetch(
              `https://api.github.com/repos/syncev/${name}/contents/cover.png`
            );
            const cover = await response.json();
            return cover.download_url;
          } catch (err) {
            console.error(`Error fetching cover for ${name}:`, err);
            return null;
          }
        })
      );
      const succesfulCovers = coversArray
        .filter((result) => result.status === "fulfilled")
        .map((result) => result.value);
      setCovers(succesfulCovers);
    };
    if (
      pageLoaded &&
      reposByUpdate.length > 0 &&
      !fetchCoverCalledRef.current
    ) {
      fetchCoverCalledRef.current = true;
      fetchCover();
    }
  }, [pageLoaded, reposByUpdate]);


  return (
    <section id="myProjects-section">
      <div className="projects-wrapper">
        <div className="titleAndLatestProject-wrapper">
          <div className="hero-shade"></div>
          <div className="title-wrapper">
            <h2 className="portfolio-header pageTitleFont">
              <span className="header-highlight">My</span> Portfolio
            </h2>
            <p className="portfolio-header-faded pageTitleFont">My Portfolio</p>
          </div>
          {firstRepo ? (
            <div key={firstRepo.id} className="latestProject-wrapper">
              <div className="latestProject-Top">
                <iframe src={firstRepo.homepage} title={firstRepo.name} />
                <div className="project-shade"></div>
                <h3 className="latestProject-title mainFont">
                  {firstRepo.name || "Nada"}
                </h3>
              </div>

              <div className="latestProject-Bottom">
                <div className="description-shade"></div>
                <p className="latestProject-description mainFont">
                  {firstRepo.description || "No description provided"}
                </p>
                <a
                  className="latestProject-goBtn"
                  href={firstRepo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={goBtn} alt="" />
                  <div className="imgBg"></div>
                </a>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
          <div className="hero-shade-bottom"></div>
        </div>

        {/* <div className="otherProjects-wrapper">
          {covers.map((cover, index) => (
            <div key={index}>
              <img src={cover} alt={`cover ${index}`} />
              <h2>this is the cover {index} </h2>
            </div>
          ))}
        </div> */}

        <div className="otherProjects-wrapper">
          {reposByUpdate.map((repo, index) => (
            <div key={repo.id} className={` singleProject-wrapper`}>
              {index % 2 === 0 ? (
                <div className="singleProject-container">
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`leftIframe iframe-container `}
                  >
                    <img src={covers[index]} alt={`cover ${index}`} />
                  </a>
                  <div className={`leftProject info-container mainFont`}>
                    <h3 className="projectTitle projectTitlesFont">
                      {repo.name || "Nada"}
                    </h3>
                    <p className="projectInfo ">
                      {repo.description || "No description provided"}
                    </p>
                    <a
                      className="goBtn "
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View {" "}
                      <span className="project-arrow">&#8594;</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="singleProject-container">
                  <div className={`rightProject info-container mainFont`}>
                    <h3 className="projectTitle projectTitlesFont">
                      {repo.name || "Nada"}
                    </h3>
                    <p className="projectInfo ">
                      {repo.description || "No description provided"}
                    </p>
                    <a
                      className="goBtn "
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View {" "}
                      <span className="project-arrow">&#8594;</span>
                    </a>
                  </div>
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`rightIframe iframe-container `}
                  >
                    <img src={covers[index]} alt={`cover ${index}`} />
                  </a>
                </div>
              )}
              <div className="pagination">
          
          </div>
            </div>
          ))}

          
        </div>
      </div>
    </section>
  );
};

export default Myprojects;

