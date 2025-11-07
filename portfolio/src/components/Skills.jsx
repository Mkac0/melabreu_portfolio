import React from 'react';
import { skills } from '../data/SkillsData';
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

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((group, groupIndex) => (
            <div key={groupIndex} className="skill-group-card">
              <h3 className="skill-group-title">{group.group}</h3>
              <div className="skill-badges-container">
                {group.list.map((skill, skillIndex) => {
                  const IconComponent = getIconComponent(skill.library, skill.icon);
                  
                  return (
                    <div key={skillIndex} className="skill-badge">
                      {IconComponent ? (
                        <IconComponent size={20} className="skill-icon" /> 
                      ) : (
                        <span>{skill.name}</span>
                      )}
                      <span className="skill-name-label">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
