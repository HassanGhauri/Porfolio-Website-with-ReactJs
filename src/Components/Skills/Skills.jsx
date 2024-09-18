/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Skills.css";
import img1 from "../../assets/beautiful-soup.png";
import img2 from "../../assets/css3-logo.png";
import img3 from "../../assets/Flasklogo.svg";
import img4 from "../../assets/html-logo.png";
import img5 from "../../assets/javascript.png";
import img6 from "../../assets/laravel-2.svg";
import img7 from "../../assets/logo-mysql.png";
import img8 from "../../assets/mongodb-icon.svg";
import img9 from "../../assets/nextjs.svg";
import img10 from "../../assets/nodejs.png";
import img11 from "../../assets/numpylogo.svg";
import img12 from "../../assets/Pandas Logo Vector.png";
import img13 from "../../assets/php-logo-20745.png";
import img14 from "../../assets/postgresql-icon.svg";
import img15 from "../../assets/python-requests-logo.png";
import img16 from "../../assets/python-seeklogo.svg";
import img17 from "../../assets/reactJs.png";
import img18 from "../../assets/selenium-1.svg";
import { PortfolioContext } from "../../Context/PortfolioContext";

const Skills = () => {
  const {Skillsref} =useContext(PortfolioContext);
  return (
    <div ref={Skillsref} className="skills" id="skill">
      <h1>My Skills</h1>
      <hr />

      <div className="skills-content">
        <div className="skills-detail">
          <img src={img1} alt="" />
          <p>Beautiful soup</p>
        </div >

        <div className="skills-detail">
          <img src={img2} alt="" />
          <p>Css3</p>
        </div>
        <div className="skills-detail">
          <img src={img3} alt="" />
          <p>Flask</p>
        </div>
        <div className="skills-detail">
          <img src={img4} alt="" />
          <p>HTML5</p>
        </div>
        <div className="skills-detail">
          <img src={img5} alt="" />
          <p>Javascript</p>
        </div>
        <div className="skills-detail">
          <img src={img6} alt="" />
          <p>Laravel</p>
        </div>
        <div className="skills-detail">
          <img src={img7} alt="" />
          <p>Mysql</p>
        </div>
        <div className="skills-detail">
          <img src={img8} alt="" />
          <p>Mongo db</p>
        </div>
        <div className="skills-detail">
          <img src={img9} alt="" />
          <p>NextJs</p>
        </div>
        <div className="skills-detail">
          <img src={img10} alt="" />
          <p>Nodejs</p>
        </div>
        <div className="skills-detail">
          <img src={img11} alt="" />
          <p>Numpy</p>
        </div>
        <div className="skills-detail">
          <img src={img12} alt="" style={{width:"80px",height:"40px"}}/>
          <p>Pandas</p>
        </div>
        <div className="skills-detail">
          <img src={img13} alt="" />
          <p>Php</p>
        </div>
        <div className="skills-detail">
          <img src={img14} alt="" />
          <p>PostgreSql</p>
        </div>
        <div className="skills-detail">
          <img src={img15} alt="" />
          <p>Python-Requests</p>
        </div>
        <div className="skills-detail">
          <img src={img16} alt="" />
          <p>Python</p>
        </div>
        <div className="skills-detail">
          <img src={img17} alt="" />
          <p>ReactJs</p>
        </div>
        <div className="skills-detail">
          <img src={img18} alt="" style={{width:"89px"}}/>
          <p>Selenium</p>
        </div>
      </div>
      <div className="skills-spans">
        <span className="skills-150"></span>
        <span className="skills-50"></span>
        <span className="skills-51"></span>
        <span className="skills-75"></span>
        <span className="skills-100"></span>
        <span className="skills-52"></span>
        <span className="skills-101"></span>
        <span className="skills-53"></span>
        <span className="skills-102"></span>
      </div>
    </div>
  );
};

export default Skills;
