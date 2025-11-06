import React from 'react';

// Data structure based on your Technical Skills section 
const skillsData = [
  {
    category: "Languages & Markup",
    skills: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Express", "Django", "Bootstrap", "jQuery"],
  },
  {
    category: "Databases & Tools",
    skills: ["PostgreSQL", "MongoDB", "Git/GitHub", "VS Code", "Postman"],
  },
  {
    category: "Deployment & Concepts",
    skills: ["Heroku", "Render", "Netlify", "REST APIs", "Agile", "MVC Architecture", "Responsive Design", "TDD"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">
          Technical Skills
        </h2>

        <div className="skills-grid">
          {skillsData.map((group, index) => (
            <div 
              key={index} 
              className="skill-group-card"
            >
              <h3 className="skill-group-title">
                {group.category}
              </h3>
              <div className="skill-badges-container">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;