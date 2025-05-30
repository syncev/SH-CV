import React, { useEffect, useRef } from "react";
import "../styles/Certificates.scss";

import JS from "../assets/icons/js.png";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import figma from "../assets/icons/figma.png";
import git from "../assets/icons/git.png";
import react from "../assets/icons/react.png";
import vite from "../assets/icons/vite.png";
import api from "../assets/icons/api.png";

import tag from "../assets/icons/tag.png";

import {contentLanguage} from "./Content.jsx";
import { useContext } from "react";
import { LanguageContext } from "./Welcome"


const Certificates = () => {
  const {languageValue, setLanguageValue} = useContext(LanguageContext);

  const verticalLine = useRef(null);
  const verticalLineParent = useRef(null);

  const verticalLineMaxHeight = () => {
    if (verticalLine.current && verticalLineParent.current) {
      const verticalLineParentHeight = verticalLineParent.current.offsetHeight;
      verticalLine.current.style.maxHeight = `${
        verticalLineParentHeight - 24
      }px`;
    }
  };
  useEffect(() => {
    verticalLineMaxHeight();
  }, []);

  return (
    <section className="certificates-section" id="certificates-section">
      <div className="certificates-wrapper">
        <div className="title-wrapper ">
          <h2 className="certificates-header ">{contentLanguage[languageValue].certificates.title} </h2>
        </div>
        <div class="timeline">
          <div className="year-content-wrapper">
            <div className="year-tag-wrapper" ref={verticalLineParent}>
              <div className="year-tag">
                <img src={tag} alt="" />
                <h3 className="year">2022</h3>
              </div>
              <div className="vertical-line vl1" ref={verticalLine}></div>
            </div>
            <div className="certificates-container">
              <div className="individual-certificate-wrapper">
                <div className="dot">
                  <div className="golden-circle"></div>
                </div>
                <a className="certificate-title-description-wrapper" href={`${import.meta.env.BASE_URL}certificates/ReactNativeGrassHopper.png`}
                target="_blank"
                rel="noopener noreferrer">
                  <h3 className="certificate-title">Coding Fundamentals</h3>
                  <p className="certificate-description">
                    Grass Hopper (Google)
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="year-content-wrapper">
            <div className="year-tag-wrapper">
              <div className="year-tag">
                <img src={tag} alt="" />
                <h3 className="year">2023</h3>
              </div>
              <div className="vertical-line vl2"> </div>
            </div>
            <div className="certificates-container">
              <div className="individual-certificate-wrapper">
                <div className="dot">
                  <div className="golden-circle"></div>
                </div>
                <a className="certificate-title-description-wrapper"
                href={`${import.meta.env.BASE_URL}certificates/FEDEducado.png`}
                target="_blank"
                rel="noopener noreferrer">
                  <h3 className="certificate-title">Front End Web Developer</h3>
                  <p className="certificate-description">
                    Educado en Argentina (A.P. 4.0)
                  </p>
                </a>
              </div>
              <div className="individual-certificate-wrapper">
                <div className="dot">
                  <div className="golden-circle"></div>
                </div>
                <a className="certificate-title-description-wrapper"
                 href={`${import.meta.env.BASE_URL}certificates/FEDUBA.png`}
                 target="_blank"
                 rel="noopener noreferrer">
                  <h3 className="certificate-title">Frontend JS Developer</h3>
                  <p className="certificate-description">
                    UBA Economicas (A.P. 4.0)
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="year-content-wrapper">
            <div className="year-tag-wrapper">
              <div className="year-tag">
                <img src={tag} alt="" />
                <h3 className="year">2025</h3>
              </div>
              <div className="vertical-line vl3"> </div>
            </div>

            <div className="certificates-container">
              <div className="individual-certificate-wrapper">
                <div className="dot">
                  {/* <div className="golden-circle"></div> */}
                  <div className="golden-circle"></div>
                </div>
                <a className="certificate-title-description-wrapper"
                href={`${import.meta.env.BASE_URL}certificates/PwJSFundacionTelefonica.png`}
                target="_blank"
                rel="noopener noreferrer">
                  <h3 className="certificate-title">
                    Programming with JavaScript
                  </h3>
                  <p className="certificate-description">
                    Fundacion Telefonica Movistar
                  </p>
                </a>
              </div>
              <div className="individual-certificate-wrapper">
                <div className="dot">
                  <div className="golden-circle"></div>
                </div>
                <a className="certificate-title-description-wrapper"
                href={`${import.meta.env.BASE_URL}certificates/AIPSantander.png`}
                target="_blank"
                rel="noopener noreferrer">
                  <h3 className="certificate-title">AI and Productivity</h3>
                  <p className="certificate-description">
                    Santander Open Academy - Google
                  </p>
                </a>
              </div>
              <div className="individual-certificate-wrapper">
                <div className="dot">
                  <div className="golden-circle"></div>
                </div>
                <a className="certificate-title-description-wrapper"
                 href={`${import.meta.env.BASE_URL}certificates/AGILESantander.png`}
                 target="_blank"
                 rel="noopener noreferrer">
                  <h3 className="certificate-title">
                    AGILE Methodologies and Project Management
                  </h3>
                  <p className="certificate-description">
                    Santander Open Academy - Google
                  </p>
                </a>
              </div>
              <div className="individual-certificate-wrapper">
                <div className="dot">
                  <div className="golden-circle"></div>
                </div>
                <a className="certificate-title-description-wrapper"
                href={`${import.meta.env.BASE_URL}certificates/GenAISololearn.png`}
                target="_blank"
                rel="noopener noreferrer">
                  <h3 className="certificate-title">
                    Generative AI in Practice
                  </h3>
                  <p className="certificate-description">Sololearn</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="more-container">
        <div className="more-title-wrapper ">
          <h2 className="more-header ">{contentLanguage[languageValue].certificates.more}</h2>
        </div>
        <div className="more-content-wrapper">
          <div className="certificate-item-container">
            <div className="square"></div>
            <a className="individual-certificate-wrapper"
             href={`${import.meta.env.BASE_URL}certificates/EF SET Certificate.png`}
             target="_blank"
             rel="noopener noreferrer">
              <h3 className="certificate-title">C2 English</h3>
              <p className="certificate-description">EF SET</p>
            </a>
          </div>
          <div className="certificate-item-container">
            <div className="square"></div>
            <div className="individual-certificate-wrapper">
              <h3 className="certificate-title">Italian Citizenship</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="skills-container">
        <div className="skills-title-wrapper ">
          <h2>{contentLanguage[languageValue].certificates.skills}</h2>
        </div>
        <div className="skill-wrapper">
          <div className="skill-img-wrapper">
            <img src={JS} alt="" />
          </div>
          <p>JavaScript</p>
        </div>
        <div className="skill-wrapper">
          <div className="skill-img-wrapper dual-img">
            <img src={html} alt="" />
            <img src={css} alt="" />
          </div>
          <p>Html & CSS</p>
        </div>
        <div className="skill-wrapper">
          <div className="skill-img-wrapper">
            <img src={figma} alt="" />
          </div>
          <p>Figma</p>
        </div>
        <div className="skill-wrapper">
          <div className="skill-img-wrapper">
            <img src={react} alt="" />
          </div>
          <p>React</p>
        </div>
        <div className="skill-wrapper">
          <div className="skill-img-wrapper">
            <img src={vite} alt="" />
          </div>
          <p>Vite</p>
        </div>
        <div className="skill-wrapper">
          <div className="skill-img-wrapper">
            <img src={api} alt="" />
          </div>
          <p>API</p>
        </div>
        <div className="skill-wrapper">
          <div className="skill-img-wrapper">
            <img src={git} alt="" />
          </div>
          <p>Git Source Control</p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
