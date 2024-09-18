/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./About.css";
import { PortfolioContext } from "../../Context/PortfolioContext";
const About = () => {
  const {Aboutref} =useContext(PortfolioContext);
  return (
    <div ref={Aboutref} className="about">
      <dvi className="about-content">
        <h1 style={{marginLeft:"-500px"}}>About</h1>
        <p>
          Hi, I am Muhammad Hassan Ghauri, a Full Stack Web Developer who
          specializes in MERN stack, Flask, PHP/Laravel and NextJs.{" "}
        </p>
        <h1 style={{marginLeft:"-365px"}}>My Education</h1>
        <p>
          I am studying Bachelors of Science in Computer Science(BSCS) from
          Umaer Basha Institute of Information Technology (UBIT), University Of
          Karachi and I am currently in fourth year and final year of my degree
          program.
        </p>
        <h1 style={{marginLeft:"-55px"}}>My Experience & Certifications</h1>
        <h3 style={{marginLeft:"-400px"}}>Work Experience: </h3>
        <p style={{marginLeft:"-330px"}}> FullStack Intern (3 months) <br /> Technet Cloud <br /> 06/2024 - 08/2024,</p>
        <h3 style={{marginLeft:"-440px"}}>Certifications: </h3>
        <p style={{marginLeft:"-320px"}}>MERN Stack (ES6 + ReactJs) <br />(05/2023 - 01/2024)</p>
        <h1 style={{marginLeft:"-385px"}}>My Expertise</h1>
        <ul style={{marginLeft:"-150px"}}>
            <li>Full Stack Web Development.</li>
            <li>Frontend Developemnt.</li>
            <li>Backend Development.</li>
            <li>Database Design and Integration.</li>
            <li>REST Api and Api Integration.</li>
            <li>Web automation , Web Scraping and Web Crawling.</li>
        </ul>
      </dvi>

      <div className="about-spans">
        <span className="about-150"></span>
        <span className="about-50"></span>
        <span className="about-51"></span>
        <span className="about-75"></span>
        <span className="about-100"></span>
        <span className="about-52"></span>
        <span className="about-101"></span>
        <span className="about-53"></span>
        <span className="about-102"></span>
      </div>
    </div>
  );
};

export default About;
