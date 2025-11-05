import React from 'react';

const ProjectCard = ({ 
  title, 
  description, 
  techStack, 
  liveLink, 
  githubLink,
  imagePath
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-xl overflow-hidden mb-12">
      <div className="md:w-1/2 p-6 flex items-center justify-center bg-gray-100">
        <div className="text-gray-500 text-center border border-dashed p-10 w-full h-full">
          [Image or Screenshot of {title}]
        </div>
      </div>

      <div className="md:w-1/2 p-8 space-y-4">
        <h3 className="text-3xl font-bold text-indigo-700">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <p className="text-gray-700 leading-relaxed pt-2">{description}</p>

        <div className="flex gap-4 pt-4">
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
            >
              View Live Demo
            </a>
          )}
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
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