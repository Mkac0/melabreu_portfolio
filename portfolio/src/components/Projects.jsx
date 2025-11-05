import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    title: "Cook 'Up (AI Recipe Generator)",
    description: "Full-stack MERN application combining AI-powered creativity (Google Gemini) with a clean, user-friendly interface. Designed to help food lovers expand their culinary skills and efficiently use leftover ingredients. Key features include user authentication, full CRUD operations on recipes, and seamless integration with the Gemini API for innovative suggestions.",
    techStack: ["JavaScript", "React", "Express", "MongoDB", "Tailwind CSS", "Google Gemini"],
    liveLink: "#",
    githubLink: "https://github.com/Mkac0",
    imagePath: "/images/cookup.jpg",
  },
  {
    title: "Tellin' (Photo/Story App)",
    description: "A full-stack CRUD application built with JavaScript, EJS, and Express. This project focused on solidifying foundational back-end architecture (Express/MVC) and demonstrating data handling for user-submitted content like photographs and short stories.",
    techStack: ["JavaScript", "EJS", "CSS", "Express"],
    liveLink: "#",
    githubLink: "https://github.com/Mkac0",
    imagePath: "/images/tellin.jpg",
  },
  {
    title: "Concentration Game",
    description: "A classic memory matching game built purely with vanilla JavaScript, HTML5, and CSS. This simple project demonstrates strong foundational skills in DOM manipulation and core JavaScript logic, essential for any frontend developer.",
    techStack: ["JavaScript", "CSS"],
    liveLink: "#", 
    githubLink: "https://github.com/Mkac0",
    imagePath: "/images/concentration.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
          <span className="border-b-4 border-indigo-500 pb-1">Featured Projects</span>
        </h2>
        
        {projectData.map((project, index) => (
          <ProjectCard 
            key={index}
            {...project}
          />
        ))}

      </div>
    </section>
  );
};

export default Projects;