import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const educationData = [
  {
    institution: "General Assembly",
    degree: "Advance Software Engineering Immersive Program",
    date: "Oct 2025",
    details: ["Completed full-stack development curriculum focusing on React, Node.js, and modern software engineering practices."],
  },
  {
    institution: "Queens College, City University of New York",
    degree: "Bachelor of Arts in Economics",
    date: "May 2020",
    details: ["Related Coursework: Price Theory, Econometrics, Business & Economics, Statistics.", "Member, Alliance of Latin American Students (ALAS)."],
  },
  {
    institution: "Borough of Manhattan Community College",
    degree: "Associate of Arts in Liberal Arts",
    date: "Jun 2016",
    details: ["Member, Freshman Learning Academy (FLA)."],
  },
];

const certificationsData = [
  {
    name: "Google Foundation of User Experience (UX) Design",
    date: "Jan 2024",
    href: "https://www.coursera.org/account/accomplishments/verify/KQEDVTZ8HA4P",
  },
  {
    name: "Accredited Tax Preparer (ATP) - La Guardia CC",
    date: "May 2019",
  },
];

const EducationAndContact = () => {
  return (
    <>
      <section id="education" className="education-section bg-light-gray">
        <div className="container">
          <h2 className="section-title">
            Education & Certifications
          </h2>

          <div className="education-grid">
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className="education-card"
              >
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-date">{edu.date}</p>
                <ul className="education-details">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="certifications-container">
            <h3 className="certifications-title">Certifications</h3>
            <div className="certifications-list">
              {certificationsData.map((cert, index) => (
                <div 
                  key={index} 
                  className="cert-badge"
                >
                  {cert.name} ({cert.date})
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="container footer-content">
          <h3 className="footer-title">Let's Connect</h3>
          
          <div className="footer-links">
            <a href="mailto:melissa.abreu84@gmail.com" className="footer-link">
              Email: melissa.abreu84@gmail.com
            </a>
            
            <a 
              href="https://www.linkedin.com/in/melissaabreu-profile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-icon-link"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn size={24} />
            </a>
            
            <a 
              href="https://github.com/Mkac0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-icon-link"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
          </div>
          
          <div className="footer-info">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Melissa Abreu. All Rights Reserved.
            </p>
            <p className="build-info">
              Built with React. Located in Charlotte, NC.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default EducationAndContact;
