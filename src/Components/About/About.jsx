/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import img1 from "../../assets/DIGISKILLS_Certificate_WordPress-1.png";
import img2 from "../../assets/MERN CERTIFICATE-1.png";
import img3 from "../../assets/Mobile-Development-Certificate.png";
import "./About.css";
import { PortfolioContext } from "../../Context/PortfolioContext";

const About = () => {
  const { Aboutref } = useContext(PortfolioContext);

  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [certificateTitle, setCertificateTitle] = useState("");

  const openModal = (img, title) => {
    setSelectedImage(img);
    setCertificateTitle(title);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div ref={Aboutref} className="about">
      <div className="about-content">
        <h1>About Me</h1>

        <p className="about-intro">
          Hi, I am <span>Muhammad Hassan Ghauri</span>, Software engineer who
          specializes in various web development technologies, tools and
          frameworks such as MERN stack, Angular, NestJs, NextJs, Spring Boot and Dot Net. Also
          have experience in mobile app development with React Native and
          Flutter.
        </p>

        <h2>Education</h2>

        <div className="about-card">
          <p>
            Bachelor of Science in Computer Science (BSCS)
            <br />
            Umaer Basha Institute of Information Technology (UBIT)
            <br />
            University Of Karachi
          </p>
        </div>

        <h2>Work Experience</h2>

        <div className="about-card">
          <p>
            <b>FullStack Intern</b>
            <br />
            Technet Cloud
            <br />
            06/2024 – 08/2024
          </p>
        </div>

        <div className="about-card">
          <p>
            <b>Software Engineer</b>
            <br />
            Regex Global Limited
            <br />
            02/2025 – Present
          </p>
        </div>

        <h2>Certifications</h2>

        <div className="certificate-container">
          <div className="certificate-card" onClick={() => openModal(img2)}>
            <img src={img2} alt="" />
            <p>MERN Stack (University of Karachi)</p>
          </div>

          <div className="certificate-card" onClick={() => openModal(img3)}>
            <img src={img3} alt="" />
            <p>Mobile Development (Coursera)</p>
          </div>

          <div className="certificate-card" onClick={() => openModal(img1)}>
            <img src={img1} alt="" />
            <p>WordPress (Digiskills)</p>
          </div>
        </div>

        <h2>My Expertise</h2>

        <div className="expertise-container">
          <div className="expertise-card">Software Engineering</div>

          <div className="expertise-card">Full Stack Development</div>

          <div className="expertise-card">Frontend Development</div>

          <div className="expertise-card">Backend Development</div>

          <div className="expertise-card">Mobile App Development</div>

          <div className="expertise-card">REST APIs</div>
        </div>
      </div>

      {/* Certificate Modal */}

      {modal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              ×
            </span>

            <h3 className="modal-title">{certificateTitle}</h3>

            <img src={selectedImage} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
