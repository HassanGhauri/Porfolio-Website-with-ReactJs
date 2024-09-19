/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import "./Footer.css";
import { MdEmail } from "react-icons/md";
import { MdSmartphone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoIosArrowUp } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { PortfolioContext } from "../../Context/PortfolioContext";
const Footer = () => {
  const { Contactref, Homeref } = useContext(PortfolioContext);
  return (
    <div ref={Contactref} className="footer" id="contact">
      <h1>Contact</h1>
      <hr />
      <div className="contact-detail">
        <p>
          <RiContactsBook2Fill /> Contact me
        </p>
        <p>
          <MdEmail /> hassanghauri14@gmail.com
        </p>
        <p>
          <MdSmartphone /> 03349505644
        </p>
        <p>
          <IoLocationSharp /> Karachi, Pakistan
        </p>
      </div>
      <div
        className="arrow"
        onClick={() => {
          Homeref.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <span>
          <IoIosArrowUp />
        </span>
      </div>
      <div className="footer-spans">
        <span className="footer-150"></span>
        <span className="footer-50"></span>
        <span className="footer-51"></span>
        <span className="footer-75"></span>
        <span className="footer-100"></span>
        <span className="footer-76"></span>
        <span className="footer-52"></span>
        <span className="footer-101"></span>
        <span className="footer-53"></span>
        <span className="footer-102"></span>
      </div>
      <div className="profiles">
        <p>View my Profiles on:</p>
        <div>
          <a href="https://github.com/HassanGhauri"><span>
            <FaGithub />
          </span></a>
          <a href="https://www.linkedin.com/in/muhammad-hassan-ghauri-80090b247"><span>
            <FaLinkedin />
          </span></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
