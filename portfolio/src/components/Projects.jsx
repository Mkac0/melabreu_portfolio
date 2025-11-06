import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    title: "Cook 'Up (AI Recipe Generator)",
    description: "Full-stack MERN application combining AI-powered creativity (Google Gemini) with a clean, user-friendly interface. Designed to help food lovers expand their culinary skills and efficiently use leftover ingredients. Key features include user authentication, full CRUD operations on recipes, and seamless integration with the Gemini API for innovative suggestions.",
    techStack: ["JavaScript", "React", "Express", "MongoDB", "Tailwind CSS", "Google Gemini"],
    liveLink: "https://cookupga.netlify.app/",
    githubLink: "https://github.com/Mkac0/cook-up-front-end",
    imageUrl: "https://i.imgur.com/R1wX28G.png",
  },
  {
    title: "Echoes (Car Listing App)",
    description: "Echos is a CRUD application built with Django that allows users to create, read, update, and delete car listings. Users can see car listing with its VIN, mileage, and price. Users are also able to create/log into their account and create their own listings.",
    techStack: ["Python", "Django", "CSS", "PostgreSQL"],
    liveLink: "https://echoes-644fddc8796a.herokuapp.com/",
    githubLink: "https://github.com/Mkac0/Echoes",
    imageUrl: "https://i.imgur.com/oMFMeTp.png",
  },
  {
    title: "Tellin' (Photo/Story App)",
    description: "A full-stack CRUD application built with JavaScript, EJS, and Express. This project focused on solidifying foundational back-end architecture (Express/MVC) and demonstrating data handling for user-submitted content like photographs and short stories.",
    techStack: ["JavaScript", "EJS", "CSS", "Express"],
    liveLink: "https://tellin-7168d99553e2.herokuapp.com/",
    githubLink: "https://github.com/Mkac0/tellin",
    imageUrl: "https://i.imgur.com/j4j5zz9.png",
  },
  {
    title: "Concentration Game",
    description: "A classic memory matching game built purely with vanilla JavaScript, HTML5, and CSS. This simple project demonstrates strong foundational skills in DOM manipulation and core JavaScript logic, essential for any frontend developer.",
    techStack: ["JavaScript", "CSS"],
    liveLink: "https://mkac0.github.io/concentration-game/", 
    githubLink: "https://github.com/Mkac0/concentration-game",
    imageUrl: "https://i.imgur.com/kwLTN1W.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section bg-light-gray">
      <div className="container">
        <h2 className="section-title">
          Featured Projects
        </h2>
        
        <div className="project-list">
          {projectData.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;