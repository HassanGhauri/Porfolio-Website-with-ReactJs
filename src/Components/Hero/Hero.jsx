import { useContext } from "react";
import "./Hero.css";
import image from "../../assets/My photo-edited.jpg";
import resume from "../../assets/Hassan's Resume.pdf";
import { PortfolioContext } from "../../Context/PortfolioContext";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  const { Aboutref, Skillsref, Projectref, Contactref, Homeref } =
    useContext(PortfolioContext);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header ref={Homeref} className="hero" id="home">
      <nav className="navbar" aria-label="Main navigation">
        <div className="links">
          <button type="button" onClick={() => scrollToSection(Aboutref)}>
            About
          </button>
          <button type="button" onClick={() => scrollToSection(Skillsref)}>
            Skills
          </button>
          <button type="button" onClick={() => scrollToSection(Projectref)}>
            Projects
          </button>
          <button type="button" onClick={() => scrollToSection(Contactref)}>
            Contact
          </button>
        </div>
      </nav>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-image">
              <img src={image} alt="Muhammad Hassan Ghauri" />
            </div>
            <h1 className="hero-heading">Muhammad Hassan Ghauri</h1>
            <p className="hero-detail">Software Engineer</p>

            <div className="hero-profiles">
              <p>Find me online</p>
              <div>
                <a
                  href="https://github.com/HassanGhauri"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                >
                  <FaGithub aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-hassan-ghauri-80090b247"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <p className="hero-eyebrow">Software Engineer</p>
            <h2>I build full-stack web and mobile applications.</h2>
            <p className="hero-summary">
              I create responsive user experiences and the backend services
              behind them, with a focus on practical features, reliable
              integrations, and maintainable code.
            </p>

            <ul className="hero-specialties" aria-label="Areas of focus">
              <li>Full-stack development</li>
              <li>Responsive interfaces</li>
              <li>Backend and API integration</li>
            </ul>

            <div className="hero-actions">
              <button
                className="hero-project-button"
                type="button"
                onClick={() => scrollToSection(Projectref)}
              >
                Explore my projects
              </button>
              <a
                className="resume-button"
                href={resume}
                target="_blank"
                rel="noreferrer"
              >
                View resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
