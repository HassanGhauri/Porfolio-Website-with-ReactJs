/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Hero.css";
import image from "../../assets/My photo-edited.jpg";
import { PortfolioContext } from "../../Context/PortfolioContext";

const Hero = () => {
  const { Skillsref, Projectref, Contactref, Homeref } =
    useContext(PortfolioContext);

  return (
    <div ref={Homeref} className="hero" id="home">
      <div className="navbar">
        <div className="links">
          <p
            onClick={() => {
              Skillsref.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Skills
          </p>

          <p
            onClick={() => {
              Projectref.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Projects
          </p>

          <p
            onClick={() => {
              Contactref.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact
          </p>
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-image">
              <img src={image} alt="image" />
            </div>

            <p className="hero-heading">Muhammad Hassan Ghauri</p>

            <p className="hero-detail">Software Engineer</p>

          </div>

          <div className="hero-right">
            <h2>About</h2>

            <p>
              Software engineer who specializes in various web development technologies, tools and
frameworks such as MERN stack, MEAN stack, NestJs and NextJs. Also have
experience in mobile app development with React Native and Flutter.
            </p>

            <h3>Education</h3>

            <p>BS Computer Science UBIT – University of Karachi</p>

            <h3>Expertise</h3>

            <ul>
              <li>Software Engineer</li>

              <li>Full Stack Web Developer</li>

              <li>Mobile App Developer</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="github">
        <p>
          Here's my
          <a href="https://github.com/HassanGhauri"> Github</a>
        </p>
      </div>

      <div className="linkedin">
        <p>
          Here's my
          <a href="https://www.linkedin.com/in/muhammad-hassan-ghauri-80090b247"> LinkedIn</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
