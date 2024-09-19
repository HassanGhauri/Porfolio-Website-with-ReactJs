/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Projectsview.css";
import { FaPlay } from "react-icons/fa6";
import img01 from "../../assets/ATTENDENCEAPP.png";
import img02 from "../../assets/Ecommerce.png";
import img03 from "../../assets/HRMS1.png";
import img04 from "../../assets/ZIPFILEEXTRACTOR.png";
import img1 from "../../assets/QuizApp.png";
import img2 from "../../assets/WeatherApp.png";
import { PortfolioContext } from "../../Context/PortfolioContext";
const Projectsview = () => {
  const { Projectref } = useContext(PortfolioContext);
  return (
    <div ref={Projectref} className="projects" id="projects">
      <div className="project-intro">
        <h1>My projects</h1>
        <hr />
        <p>
          My Github Link:{" "}
          <a href="https://github.com/HassanGhauri">
            https://github.com/HassanGhauri
          </a>{" "}
        </p>
      </div>
      <div className="project-content">
        <div className="details">
          <img src={img01} style={{ width: "280px", height: "180px" }} />
          <p>Attendence App</p>
          <p>
            Github Link: <br />
            <a href="https://github.com/HassanGhauri/Attendence-App">
              https://github.com/HassanGhauri/Attendence-App
            </a>
          </p>
        </div>

        <div className="details">
          <img src={img02} style={{ width: "280px", height: "180px" }} />
          <p>E-commerce Website</p>
          <p>
            Github Link: <br />
            <a href="https://github.com/HassanGhauri/Ecommerce_Website">
              https://github.com/HassanGhauri/Ecommerce_Website
            </a>
          </p>
        </div>
        <div className="details">
          <img src={img03} style={{ width: "280px", height: "180px" }} />
          <p>HR managment system </p>
          <p>
            Github Link:{" "}
            <a href="https://github.com/HassanGhauri/HRMS">
              https://github.com/HassanGhauri/HRMS
            </a>
          </p>
        </div>
        <div className="details">
          <a href="">
            <img src={img1} style={{ width: "280px", height: "180px" }} />
          </a>
          <p>Quiz App </p>
          <p>
            Github Link:{" "}
            <a href="https://github.com/HassanGhauri/React-Quiz-App">
              https://github.com/HassanGhauri/React-Quiz-App
            </a>
          </p>
        </div>
        <div className="details">
          <a href="">
            <img src={img2} style={{ width: "280px", height: "180px" }} />
          </a>
          <p>Weather App </p>
          <p>
            Github Link:{" "}
            <a href="https://github.com/HassanGhauri/React-Weather-App">
              https://github.com/HassanGhauri/React-Weather-App
            </a>
          </p>
        </div>
        <div className="details">
          <a href="">
            <img src={img04} style={{ width: "280px", height: "180px" }} />
          </a>
          <p>ZipFile Extractor </p>
          <p>
            Github Link:{" "}
            <a href="https://github.com/HassanGhauri/ZipFileExtractor">
              https://github.com/HassanGhauri/ZipFileExtractor
            </a>
          </p>
        </div>
      </div>
      <div className="project-spans">
        <span className="project-150"></span>
        <span className="project-50"></span>
        <span className="project-51"></span>
        <span className="project-75"></span>
        <span className="project-100"></span>
        <span className="project-52"></span>
        <span className="project-101"></span>
        <span className="project-53"></span>
        <span className="project-102"></span>
      </div>
    </div>
  );
};

export default Projectsview;
