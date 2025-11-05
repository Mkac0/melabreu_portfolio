import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-content">
          
          <h1 className="hero-title">
            Melissa Abreu
          </h1>
          <p className="hero-role">
            Junior Software Engineer | Full-Stack Developer
          </p>

          <p className="hero-summary">
            Motivated software engineer with hands-on experience in **JavaScript, React, Node.js, and PostgreSQL**. A graduate of General Assembly's Software Engineering Immersive, I combine technical expertise with a strong foundation in economics and operations to design efficient systems, solve complex problems, and collaborate in agile development environments.
          </p>

          <div className="hero-actions">
            <a 
              href="#projects" 
              className="cta-button" 
            >
              View Projects
            </a>
            <a 
              href="mailto:melissa.abreu84@gmail.com" 
              className="cta-button action-secondary" 
            >
              Contact Me
            </a>
          </div>

          <div className="hero-social-links">
            <a 
              href="https://www.linkedin.com/in/melissaabreu-profile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn size={28} /> 
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/Mkac0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="GitHub Profile"
            >
              <FaGithub size={28} />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
