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

      <div className="footer-container">

        {/* CONTACT SECTION */}
        <div className="contact-detail">
          <h3><RiContactsBook2Fill /> Get in Touch</h3>

          <p>
            <MdEmail />
            <a href="mailto:hassanghauri14@gmail.com">
              hassanghauri14@gmail.com
            </a>
          </p>

          <p>
            <MdSmartphone />
            <a href="tel:03349505644">
              03349505644
            </a>
          </p>

          <p>
            <IoLocationSharp /> Karachi, Pakistan
          </p>
        </div>

        {/* SOCIAL SECTION */}
        <div className="footer-social">
          <h3>Connect with me</h3>

          <div className="profiles">
            <a href="https://github.com/HassanGhauri" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-hassan-ghauri-80090b247"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>

      {/* SCROLL TO TOP */}
      <div
        className="arrow"
        onClick={() => {
          Homeref.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <IoIosArrowUp />
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Muhammad Hassan Ghauri. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;