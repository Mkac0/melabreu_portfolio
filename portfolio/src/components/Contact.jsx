import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const CONTACT_INFO = {
  email: "melissa.abreu84@gmail.com",
  linkedin: "https://www.linkedin.com/in/melissaabreu-profile",
  github: "https://github.com/Mkac0",
};

const Contact = () => {
  return (
    <section id="contact" className="contact-form-section">
      <div className="container">
        
        <h2 className="section-title">Get In Touch!</h2>
        <form 
          className="contact-form" 
          action="YOUR_FORMSPREE_OR_NETLIFY_ENDPOINT" 
          method="POST"
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            className="form-input" 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            className="form-input" 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            required 
            rows="5" 
            className="form-textarea"
          ></textarea>
          
          <button type="submit" className="cta-button form-submit-button">
            Send Message
          </button>
        </form>

      </div>

      <footer className="footer-section">
        <div className="container footer-content-container">
          
          <div className="footer-social-links">
            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="social-link footer-icon-link"
              aria-label="Email Melissa Abreu"
            >
              <FaEnvelope size={24} />
            </a>
            <a 
              href={CONTACT_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link footer-icon-link"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn size={24} /> 
            </a>
            <a 
              href={CONTACT_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link footer-icon-link"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
          </div>
          
          <div className="footer-info">
              <p className="copyright">© {new Date().getFullYear()} Melissa Abreu. All rights reserved.</p>
              <p className="build-info">Built with React. Located in Charlotte, NC.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;