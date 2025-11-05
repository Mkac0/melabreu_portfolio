import React from 'react';

const skillsData = [
  {
    category: "Languages & Markup",
    skills: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Express", "Django", "Tailwind CSS", "Bootstrap", "jQuery"],
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
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
          <span className="border-b-4 border-indigo-500 pb-1">Technical Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((group, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-bold text-indigo-600 mb-4 border-b-2 border-indigo-200 pb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-1.5 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full transition duration-300 hover:bg-indigo-200"
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