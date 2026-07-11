import React from 'react';

const experienceData = [
  {
    company: "Revature",
    role: "Software Engineer Apprentice",
    dates: "June 2026 - Present",
    location: "Remote",
    achievements: [
      "As a Software Engineer Apprentice, I wrote and optimized SQL queries for data extraction, transformation, and reporting from large datasets. I also assisted in designing and implementing ETL pipelines to support data-driven business decisions, collaborated with cross-functional teams to troubleshoot software issues and deliver scalable solutions, participated in code reviews, testing, debugging, and documentation following Agile development practices, and improved data processing performance through query optimization and efficient data management techniques."
    ]
  },
  {
    company: "Felipe Tax Corporation",
    role: "Tax Preparer",
    dates: "Jan 2022 - Apr 2025",
    location: "Queens, NY",
    achievements: [
      "As a Tax Preparer, I significantly improved operational efficiency by introducing over five new procedures, which boosted workflow by 36%, and by reorganizing filing systems, increasing overall efficiency by 25%. My core responsibilities included preparing and filing accurate individual, corporate, and partnership tax returns using Drake software, alongside conducting in-depth document reviews to ensure compliance with all tax regulations. I provided exceptional client service by advising on tax-saving strategies and deductions, maintaining strict confidentiality, assisting with internal audits, and training new staff on filing procedures and software systems to ensure team readiness during peak seasons."
    ]
  },
  {
    company: "Walmart E-Commerce",
    role: "Logistics Coordinator / Remedy Analyst",
    dates: "Aug 2021 - Dec 2022",
    location: "Pedricktown, NJ",
    achievements: [
      "As a Logistics Coordinator, my responsibilities spanned systems management and operational efficiency. I managed SQL and NOVA databases for Remedy ARS backend support and dramatically improved issue resolution by creating a dashboard to track Fix It tickets. Operationally, I maximized warehouse staffing efficiency by scheduling inbound shipments, used WMTS to manage inter-facility shipments, and resolved complex inbound merchandise issues through root cause analysis. Finally, I ensured operational continuity by training team members across multiple fulfillment centers on CAPTIVA and SCMT systems, all while building strong communication channels with carriers, vendors, and clients."
    ]
  },
];

const JobCard = ({ company, role, dates, location, achievements }) => (
  <div className="job-card">
    <div className="job-header">
      <div>
        <h3 className="job-role">{role}</h3>
        <p className="job-company">{company}</p>
      </div>
      <div className="job-dates-location">
        <p className="job-dates">{dates}</p>
        <p className="job-location">{location}</p>
      </div>
    </div>
    
    <ul className="job-achievements">
      {achievements.map((item, index) => (
        <li key={index}>
          {item} 
        </li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="experience-section bg-light-gray">
      <div className="container">
        <h2 className="section-title">
          Professional Experience
        </h2>
        
        <div className="job-list">
          {experienceData.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;