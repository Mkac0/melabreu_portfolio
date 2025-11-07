import React from 'react';
import { skillGroups } from '../data/SkillsData';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div key={index} className="skill-group-card">
              <h3 className="skill-group-title">{group.title}</h3>
              <div className="skill-badges-container">
                {group.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
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