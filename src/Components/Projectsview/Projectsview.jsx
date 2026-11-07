import { useContext } from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { PortfolioContext } from "../../Context/PortfolioContext";
import attendanceImage from "../../assets/ATTENDENCEAPP.png";
import ecommerceImage from "../../assets/Ecommerce.png";
import hrmsImage from "../../assets/HRMS1.png";
import quizImage from "../../assets/QuizApp.png";
import weatherImage from "../../assets/WeatherApp.png";
import userManagementImage from "../../assets/UMS.png";
import "./Projectsview.css";

const projects = [
  {
    name: "Attendance App",
    description:
      "A web app for managing attendance records and reviewing attendance data.",
    image: attendanceImage,
    imageAlt: "Attendance app sign-in screen",
    technologies: ["React", "Node.js", "MongoDB"],
    repository: "https://github.com/HassanGhauri/Attendence-App",
  },
  {
    name: "E-commerce Website",
    description:
      "An online storefront for browsing products and managing a shopping experience.",
    image: ecommerceImage,
    imageAlt: "E-commerce website product catalog",
    technologies: ["React", "Node.js", "MongoDB"],
    repository: "https://github.com/HassanGhauri/Ecommerce_Website",
  },
  {
    name: "HR Management System",
    description:
      "An HR management system with an interface for organizing employee-related workflows.",
    image: hrmsImage,
    imageAlt: "HR management system interface",
    technologies: ["React", "Node.js", "MySQL"],
    repository: "https://github.com/HassanGhauri/HRMS",
  },
  {
    name: "Quiz App",
    description:
      "An interactive quiz experience for answering questions and checking your results.",
    image: quizImage,
    imageAlt: "Quiz app question screen",
    technologies: ["React"],
    repository: "https://github.com/HassanGhauri/React-Quiz-App",
  },
  {
    name: "Weather App",
    description:
      "A React weather app that presents weather conditions in a simple dashboard.",
    image: weatherImage,
    imageAlt: "Weather app showing current conditions",
    technologies: ["React"],
    repository: "https://github.com/HassanGhauri/React-Weather-App",
  },
  {
    name: "User Management System",
    description:
      "A user management system with an Angular frontend and Spring Boot backend.",
    image: userManagementImage,
    imageAlt: "User management system sign-in screen",
    technologies: ["Angular", "Spring Boot"],
    repository:
      "https://github.com/HassanGhauri/UserManagementSystem-Angular-Frontend",
  },
];

const Projectsview = () => {
  const { Projectref } = useContext(PortfolioContext);

  return (
    <section ref={Projectref} className="projects" id="projects">
      <div className="project-intro">
        <p className="project-eyebrow">Selected work</p>
        <h2>Projects</h2>
        <p className="project-summary">
          A selection of applications I&apos;ve built and the technologies behind
          them.
        </p>
        <a
          className="github-profile-link"
          href="https://github.com/HassanGhauri"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub aria-hidden="true" />
          <span>Explore my GitHub</span>
          <FaArrowUpRightFromSquare aria-hidden="true" />
        </a>
      </div>

      <div className="project-content">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <img
              className="project-img"
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
            />
            <div className="project-card-content">
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-technologies" aria-label="Technologies">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <div className="project-actions">
                <a
                  className="project-link"
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} source code on GitHub`}
                >
                  <FaGithub aria-hidden="true" />
                  <span>View code</span>
                  <FaArrowUpRightFromSquare aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projectsview;
