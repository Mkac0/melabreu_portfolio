import React from 'react';
import { education, certifications } from '../data/EducationData'; 

const EducationAndCert = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        
        <div className="section-title">Education & Certifications</div>

        <div className="education-grid">
          {education.map((item, index) => (
            <div key={index} className="education-card">
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-institution">{item.institution}</p>
              <p className="education-date">{item.date}</p>
              
              {item.details.length > 0 && (
                <ul className="education-details">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="certifications-container">
          <h4 className="certifications-title">Professional Certifications</h4>
          <div className="certifications-list">
            {certifications.map((cert, index) => (
              <a 
                key={index} 
                href={cert.link}
                target="_blank" 
                rel="noopener noreferrer" 
                className="cert-badge"
              >
                {cert.name} ({cert.date})
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default EducationAndCert;