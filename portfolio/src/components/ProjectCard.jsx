import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as DiIcons from 'react-icons/di';
import * as SiIcons from 'react-icons/si';
import * as MdIcons from 'react-icons/md';

const getIconComponent = (library, iconName) => {
  switch (library) {
    case 'Fa': return FaIcons[iconName];
    case 'Di': return DiIcons[iconName];
    case 'Si': return SiIcons[iconName];
    case 'Md': return MdIcons[iconName];
    default: return null;
  }
};

const ProjectCard = ({ project }) => {
  const [flipped, setFlipped] = useState(false);
  const toggleFlip = () => setFlipped(prev => !prev);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip();
    }
  };

  return (
    <div
      className={`project-card ${flipped ? 'is-flipped' : ''}`}
      onClick={toggleFlip}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`Toggle details for ${project.title}`}
    >
      <div className="project-card-inner">
        {/* FRONT – screenshot */}
        <div className="project-card-face project-card-front">
          <div className="project-image-wrapper">
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
          <div className="project-front-overlay">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-front-hint">Click to view details</p>
          </div>
        </div>
        {/* BACK – details */}
        <div className="project-card-face project-card-back">
          <h3 className="project-title">{project.title}</h3>

          <div className="project-tech-stack">
            {project.techStack.map((tech, index) => {
              const IconComponent = getIconComponent(tech.library, tech.icon);
              return (
                <div key={index} className="tech-badge">
                  {IconComponent ? (
                    <IconComponent size={18} className="tech-icon" />
                  ) : null}
                  <span className="tech-name-label">{tech.name}</span>
                </div>
              );
            })}
          </div>
          <p className="project-description">
            {project.description}
          </p>
          <div className="project-actions">
            {project.liveDemoLink && project.liveDemoLink !== 'YOUR_LIVE_DEMO_LINK' && (
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // don't flip when clicking links
              >
                View Live Demo
              </a>
            )}
            {project.githubLink && project.githubLink !== 'YOUR_GITHUB_LINK' && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                View Code (GitHub)
              </a>
            )}
          </div>
          <p className="project-back-hint">Click card again to flip back</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;