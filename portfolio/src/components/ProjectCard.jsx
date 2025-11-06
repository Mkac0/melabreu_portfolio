import React from 'react';

const ProjectCard = ({ 
  title, 
  description, 
  techStack, 
  liveLink, 
  githubLink,
  imageUrl
}) => {
  return (
    <div className="project-card">
      
      <div className="project-image-container">
        <img src={imageUrl} alt={`Screenshot of ${title} application`} className="project-image" />
      </div>

      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        
        <div className="project-tech-stack">
          {techStack.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        <p className="project-description">{description}</p>

        <div className="project-actions">
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button"
            >
              View Live Demo
            </a>
          )}
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cta-button action-secondary"
            >
              View Code (GitHub)
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;