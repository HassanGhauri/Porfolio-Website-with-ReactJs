/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Projectsview.css";
import { FaPlay } from "react-icons/fa6";
import img01 from "../../assets/ATTENDENCEAPP.png";
import img19 from "../../assets/angular_gradient.png";
import img20 from "../../assets/spring-boot.png";
import img02 from "../../assets/Ecommerce.png";
import img03 from "../../assets/HRMS1.png";
import img04 from "../../assets/ZIPFILEEXTRACTOR.png";
import img1 from "../../assets/QuizApp.png";
import img2 from "../../assets/WeatherApp.png";
import img8 from "../../assets/mongodb-icon.svg";
import img10 from "../../assets/nodejs.png";
import img17 from "../../assets/reactJs.png";
import img18 from "../../assets/UMS.png";
import img7 from "../../assets/logo-mysql.png";
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
            Github Link:{" "}
            <a href="https://github.com/HassanGhauri/Attendence-App">
              Attendence-App
            </a>
          </p>
          <div className="tech-stack">
            <p>Tech Stack</p>
            <div className="tech-icons">
              <img src={img17} alt="react" />
              <img src={img10} alt="node" />
              <img src={img8} alt="mongodb" />
            </div>
          </div>
        </div>

        <div className="details">
          <img src={img02} style={{ width: "280px", height: "180px" }} />
          <p>E-commerce Website</p>
          <p>
            Github Link:{" "}
            <a href="https://github.com/HassanGhauri/Ecommerce_Website">
              Ecommerce-Website
            </a>
          </p>
          <div className="tech-stack">
            <p>Tech Stack</p>
            <div className="tech-icons">
              <img src={img17} alt="react" />
              <img src={img10} alt="node" />
              <img src={img8} alt="mongodb" />
            </div>
          </div>
        </div>
        <div className="details">
          <img src={img03} style={{ width: "280px", height: "180px" }} />
          <p>HR managment system </p>
          <p>
            Github Link:{" "}
            <a href="https://github.com/HassanGhauri/HRMS">
              HR managment system
            </a>
          </p>
          <div className="tech-stack">
            <p>Tech Stack</p>
            <div className="tech-icons">
              <img src={img17} alt="react" />
              <img src={img10} alt="node" />
              <img src={img7} alt="mysql" />
            </div>
          </div>
        </div>
        <div className="details">
          <a href="">
            <img src={img1} style={{ width: "280px", height: "180px" }} />
          </a>
          <p>Quiz App </p>
          <p>
            Github Link:{" "}
            <a href="https://github.com/HassanGhauri/React-Quiz-App">
              Quiz-App
            </a>
          </p>
          <div className="tech-stack">
            <p>Tech Stack</p>
            <div className="tech-icons">
              <img src={img17} alt="react" />
            </div>
          </div>
        </div>
        <div className="details">
          <a href="">
            <img src={img2} style={{ width: "280px", height: "180px" }} />
          </a>
          <p>Weather App With React</p>
          <p>
            Github Link:{" "}
            <a href="https://github.com/HassanGhauri/React-Weather-App">
              Weather-App
            </a>
          </p>
          <div className="tech-stack">
            <p>Tech Stack</p>
            <div className="tech-icons">
              <img src={img17} alt="react" />
            </div>
          </div>
        </div>
        <div className="details">
          <a href="">
            <img src={img18} style={{ width: "280px", height: "180px" }} />
          </a>
          <p>User Management System With Angular&SpringBoot</p>
          <p>
            Github Link:{" "}
            <a href="https://github.com/HassanGhauri/React-Weather-App">
              User Management System
            </a>
          </p>
          <div className="tech-stack">
            <p>Tech Stack</p>
            <div className="tech-icons">
              <img src={img19} alt="react" />
              <img src={img20} alt="react" />
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Projectsview;
