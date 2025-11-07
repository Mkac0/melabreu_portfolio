import React from 'react';
import { projects } from '../data/ProjectsData'; 
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        <h2 className="section-title">Featured Projects</h2>

        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;