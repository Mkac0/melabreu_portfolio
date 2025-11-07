import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-details">
        <div>
          <h3 className="project-title">{project.title}</h3>
          
          <div className="project-tech-stack">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          <p className="project-description">
            {project.description}
          </p>
        </div>

        <div className="project-actions">
          {project.liveDemoLink && project.liveDemoLink !== 'YOUR_LIVE_DEMO_LINK' && (
            <a 
              href={project.liveDemoLink} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Live Demo
            </a>
          )}
          
          {project.githubLink && project.githubLink !== 'YOUR_GITHUB_LINK' && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Code (GitHub)
            </a>
          )}
        </div>
      </div>
      
     <div className="project-image-container">
        {project.image ? (
          <img 
            src={project.image} 
            alt={`Screenshot of ${project.title} application`} 
            className="project-image" 
          />
        ) : (
          <div className="project-image-placeholder">
             Screenshot or Image of {project.title}
          </div>
        )}
      </div>

    </div>
  );
};

export default ProjectCard;