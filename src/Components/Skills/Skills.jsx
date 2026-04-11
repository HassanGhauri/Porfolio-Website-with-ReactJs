/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Skills.css";
import img1 from "../../assets/angular_gradient.png";
import img2 from "../../assets/flutter-logo.png";
import img3 from "../../assets/nestjs-logo.png";
import img4 from "../../assets/nginx.png";
import img5 from "../../assets/javascript.png";
import img6 from "../../assets/github.png";
import img7 from "../../assets/logo-mysql.png";
import img8 from "../../assets/mongodb-icon.svg";
import img9 from "../../assets/nextjs.svg";
import img10 from "../../assets/nodejs.png";
import img11 from "../../assets/gitlab.png";
import img12 from "../../assets/wordpress.png";
import img13 from "../../assets/php-logo-20745.png";
import img14 from "../../assets/jquery.png";
import img15 from "../../assets/primeng.png";
import img16 from "../../assets/react-native.png";
import img17 from "../../assets/reactJs.png";
import img18 from "../../assets/tailwind-css.png";
import img19 from "../../assets/spring-boot.png";
import img20 from "../../assets/java.png";
import { PortfolioContext } from "../../Context/PortfolioContext";

const Skills = () => {
  const { Skillsref } = useContext(PortfolioContext);

  return (
    <div ref={Skillsref} className="skills" id="skill">
      <h1>My Skills</h1>
      <hr />

      {/* Frontend */}
      <h2 className="skills-category">Frontend Technologies</h2>
      <div className="skills-content">
        <div className="skills-detail">
          <img src={img1} alt="" />
          <p>Angular</p>
        </div>

        <div className="skills-detail">
          <img src={img17} alt="" />
          <p>ReactJs</p>
        </div>

        <div className="skills-detail">
          <img src={img9} alt="" />
          <p>NextJs</p>
        </div>

        <div className="skills-detail">
          <img src={img5} alt="" />
          <p>Javascript</p>
        </div>

        <div className="skills-detail">
          <img src={img14} alt="" />
          <p>Jquery</p>
        </div>

        <div className="skills-detail">
          <img src={img18} alt="" />
          <p>Tailwind CSS</p>
        </div>

        <div className="skills-detail">
          <img src={img15} alt="" />
          <p>PrimeNG</p>
        </div>
      </div>

      {/* Backend */}
      <h2 className="skills-category">Backend Technologies</h2>
      <div className="skills-content">
        <div className="skills-detail">
          <img src={img10} alt="" />
          <p>NodeJs</p>
        </div>

        <div className="skills-detail">
          <img src={img3} alt="" />
          <p>NestJs</p>
        </div>

        <div className="skills-detail">
          <img src={img19} alt="" />
          <p>Spring Boot</p>
        </div>

        <div className="skills-detail">
          <img src={img20} alt="" />
          <p>Java</p>
        </div>

        <div className="skills-detail">
          <img src={img13} alt="" />
          <p>PHP</p>
        </div>

        <div className="skills-detail">
          <img src={img12} alt="" />
          <p>WordPress</p>
        </div>
      </div>

      {/* Databases */}
      <h2 className="skills-category">Databases</h2>
      <div className="skills-content">
        <div className="skills-detail">
          <img src={img7} alt="" />
          <p>MySQL</p>
        </div>

        <div className="skills-detail">
          <img src={img8} alt="" />
          <p>MongoDB</p>
        </div>
      </div>

      {/* Mobile */}
      <h2 className="skills-category">Mobile Development</h2>
      <div className="skills-content">
        <div className="skills-detail">
          <img src={img2} alt="" />
          <p>Flutter</p>
        </div>

        <div className="skills-detail">
          <img src={img16} alt="" />
          <p>React Native</p>
        </div>
      </div>

      {/* DevOps & Tools */}
      <h2 className="skills-category">DevOps & Tools</h2>
      <div className="skills-content">
        <div className="skills-detail">
          <img src={img4} alt="" />
          <p>Nginx</p>
        </div>

        <div className="skills-detail">
          <img src={img6} alt="" />
          <p>Github</p>
        </div>

        <div className="skills-detail">
          <img src={img11} alt="" />
          <p>Gitlab</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
