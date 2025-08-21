import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import projectPic1 from "./assets/project-pic-1.png";
import projectPic2 from "./assets/project-pic-2.png";
import projectPic3 from "./assets/project-pic-3.png";
import projectPic4 from "./assets/project-pic-4.png";
import "./Portfolio.css";

const projects = [
  {
    id: 1,
    title: "Weather App",
    description: `The weather app shows daily conditions, a 7-day forecast, and an 8-day hourly breakdown,
            all powered by a reliable API and featuring a sleek dark mode.`,
    link: "https://ddelportgit.github.io/weather-app-4/",
    github: "https://github.com/ddelportgit/weather-app-4",
    imageSrc: projectPic1,
  },
  {
    id: 2,
    title: "Bible App",
    description: `Explore the Bible with our API-driven app, where you can choose a version, navigate
            through books and chapters, and copy verses with a single click.`,
    link: "https://ddelportgit.github.io/bible-app-1/",
    github: "https://github.com/ddelportgit/bible-app-1",
    imageSrc: projectPic2,
  },
  {
    id: 3,
    title: "Tic-Tac-Toe Game",
    description: `Enjoy our Tic Tac Toe game featuring a theme changer for a personalized look and a modal
            with easy-to-follow instructions for seamless gameplay.`,
    link: "https://ddelportgit.github.io/tictactoe-game-1/",
    github: "https://github.com/ddelportgit/tictactoe-game-1",
    imageSrc: projectPic3,
  },
  {
    id: 4,
    title: "Password Generator",
    description: `Generate secure passwords with our random password generator, featuring customizable
            options and a user-friendly interface for enhanced security.`,
    link: "https://ddelportgit.github.io/password-generator-1/",
    github: "https://github.com/ddelportgit/password-generator-1",
    imageSrc: projectPic4,
  },
];

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll reveal effect
  useEffect(() => {
    const revealElements = document.querySelectorAll(".scroll-reveal");

    const handleScroll = () => {
      revealElements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // reveal on load if already visible

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`portfolio ${darkMode ? "dark" : ""}`}>
      {/* Header */}
      <header className="header">
        <h1 className="logo">My Portfolio</h1>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <button
            className="dark-mode-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </nav>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero scroll-reveal">
        <div className="hero-content">
          <h2>
            Hi, I'm <span className="highlight">Donovan Delport</span>
          </h2>
          <p>
            I'm a front-end developer passionate about creating beautiful, user-friendly websites
            using HTML, CSS, and JavaScript.
          </p>
          <a href="#projects" className="btn">
            View My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section scroll-reveal">
        <h3>About Me</h3>
        <p>
          I started learning web development to bring creative ideas to life on the internet. I
          focus on building clean, responsive, and accessible websites. Currently, I'm exploring
          React and improving my skills one project at a time.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects scroll-reveal">
        <h3>Projects</h3>
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card scroll-reveal">
              <img className="project-image" src={project.imageSrc} alt={project.title} />
              <div className="project-info">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact scroll-reveal">
        <h3>Contact Me</h3>
        <p>Let's connect! You can reach me via email or through my social media profiles.</p>
        <div className="social-links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>
          <a href="mailto:example@email.com" aria-label="Email">
            <Mail />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Donovan Delport. All rights reserved.
      </footer>
    </div>
  );
}
