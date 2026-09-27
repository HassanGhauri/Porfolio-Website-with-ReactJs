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
        <hr />
        <p className="about-intro">
          Hi, I am <span>Muhammad Hassan Ghauri</span>, Software Engineer with
          expertise in full-stack web and mobile development using Angular,
          Vue.js, React, NestJS, ASP.NET, Spring Boot, Laravel, Flutter, and
          React Native with a focus on scalable systems and clean software
          architecture.
        </p>

        <div className="about-highlights">
          <section className="about-group">
            <h2>Education</h2>
            <div className="about-card education-card">
              <div className="education-list">
                <article className="education-entry">
                  <div className="education-heading">
                    <h3>Bachelor of Computer Science</h3>
                    <time dateTime="2021-01">Jan 2021 – Jan 2025</time>
                  </div>
                  <p>University of Karachi (UBIT)</p>
                  <p className="education-location">Karachi, Pakistan</p>
                </article>
                <article className="education-entry">
                  <div className="education-heading">
                    <h3>F.Sc. Pre-Engineering</h3>
                    <time dateTime="2018-01">Jan 2018 – Jan 2020</time>
                  </div>
                  <p>Aisha Bawany Government Boys College, Karachi</p>
                  <p className="education-location">Karachi, Pakistan</p>
                </article>
              </div>
            </div>
          </section>

          <section className="about-group">
            <h2>Work Experience</h2>
            <div className="experience-list">
              <article className="experience-entry">
                <div className="experience-heading">
                  <h3>Software Engineer</h3>
                  <time dateTime="2025-02">Feb 2025 – Present</time>
                </div>
                <p>Regex Global Limited</p>
                <ul className="experience-points">
                  <li>
                    Maintained and enhanced existing EdTech, eCommerce, and
                    project management applications using Angular, NestJS,
                    Yii2, Flutter, jQuery, and PHP.
                  </li>
                  <li>
                    Customized WordPress themes and plugins for an eCommerce
                    store, improving its styling, layout, responsiveness, and
                    features.
                  </li>
                  <li>
                    Handled SQL migrations, SMTP email content and template
                    updates, REST API integrations, responsive improvements,
                    and performance optimizations to reduce load in EdTech
                    applications.
                  </li>
                  <li>
                    Worked on existing single-agent and multi-agent AI systems,
                    refining system prompts, data flow, and AI responses.
                  </li>
                </ul>
              </article>

              <article className="experience-entry">
                <div className="experience-heading">
                  <h3>Full Stack Intern</h3>
                  <time dateTime="2024-06">Jun 2024 – Aug 2024</time>
                </div>
                <p>Technet Cloud</p>
                <ul className="experience-points">
                  <li>
                    Built a responsive MERN eCommerce application with an admin
                    product-management panel, Multer image uploads, and a
                    customer storefront with authentication, cart, and
                    purchasing.
                  </li>
                  <li>
                    Built a MERN student attendance system with an admin panel
                    for student record management and a student portal for
                    logging in and marking attendance.
                  </li>
                  <li>
                    Built an employee management system with MySQL, Node.js,
                    React, and Express, including employee administration,
                    configurable fields, and a portal for viewing personal
                    records.
                  </li>
                </ul>
              </article>
            </div>
          </section>
        </div>

        <h2>Expertise</h2>

        <div className="expertise-container">
          <article className="expertise-card">
            <h3>Full-stack development</h3>
            <p>Building complete web applications across frontend and backend.</p>
          </article>

          <article className="expertise-card">
            <h3>Responsive interfaces</h3>
            <p>Creating clear, adaptable experiences for different screen sizes.</p>
          </article>

          <article className="expertise-card">
            <h3>Backend and API integration</h3>
            <p>Developing server-side features and connecting REST APIs.</p>
          </article>

          <article className="expertise-card">
            <h3>Database and performance work</h3>
            <p>Handling SQL changes and improving application load performance.</p>
          </article>

          <article className="expertise-card">
            <h3>Mobile development</h3>
            <p>Building mobile applications with Flutter and React Native.</p>
          </article>
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
