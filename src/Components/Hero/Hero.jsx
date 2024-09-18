/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Hero.css";
import image from "../../assets/My photo-edited.jpg";
import { PortfolioContext } from "../../Context/PortfolioContext";
const Hero = () => {
  const {Aboutref,Skillsref,Projectref,Contactref,Homeref} =useContext(PortfolioContext);
  return (
    <div ref={Homeref} className="hero" id="home">
      <div className="navbar">
        <div className="links">
          <p onClick={()=>{
            Aboutref.current.scrollIntoView({
              behavior:"smooth"
            })
          }}>About</p>
          <p onClick={()=>{
            Skillsref.current.scrollIntoView({
              behavior:"smooth"
            })
          }}>Skills</p>
          <p onClick={()=>{
            Projectref.current.scrollIntoView({
              behavior:"smooth"
            })
          }}>Projects</p>
          <p onClick={()=>{
            Contactref.current.scrollIntoView({
              behavior:"smooth"
            })
          }}>Contact</p>
        </div>
      </div>

      <div className="spans">
        <span className="span-150"></span>
        <span className="span-50"></span>
        <span className="span-51"></span>
        <span className="span-75"></span>
        <span className="span-100"></span>
        <span className="span-76"></span>
        <span className="span-52"></span>
        <span className="span-101"></span>
        <span className="span-53"></span>
        <span className="span-102"></span>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <img src={image} alt="image" />
          </div>
          <div className="hero-para">
            <p className="hero-heading">Muhammad Hassan Ghauri</p>
            <p className="hero-detail">
              Specialized in Full Stack Web Development.
            </p>
          </div>
        </div>
      </div>
      <div className="github">
        <p>Here's my <a href="https://github.com/HassanGhauri">Github</a></p>
      </div>
      <div className="linkedin">
      <p>Here's my <a href="https://www.linkedin.com/in/muhammad-hassan-ghauri-80090b247">LinkedIn</a></p>
      </div>
    </div>
  );
};

export default Hero;
