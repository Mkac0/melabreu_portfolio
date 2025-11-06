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
            My brain is wired for systems thinking.
            <hr />
            As a dyslexic coder, reading and writing can take more effort — but that challenge gave me a superpower. When I recently started coding, I struggled with syntax and documentation. But over time, I noticed something: while others focused on every line, I was drawn to the bigger picture — how systems fit together, where logic breaks down, and how to simplify complexity.
            Dyslexia trained me to see patterns, think spatially, and solve problems creatively. And those skills? I believe they’re gold in software development. Many dyslexic tech leaders — like Richard Branson and David Baszucki (creator of Roblox) — have said the same: dyslexia helped them think differently, focusing less on memorization and more on innovation.
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
