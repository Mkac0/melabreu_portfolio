import React from 'react';

const experienceData = [
  {
    company: "Felipe Tax Corporation",
    role: "Tax Preparer",
    dates: "Jan 2022 - Apr 2025",
    location: "Queens, NY",
    achievements: [
      "Automated client filing workflows, reducing turnaround time by 36%[cite: 20].",
      "Analyzed large datasets in Drake Software and Excel to ensure compliance and accuracy[cite: 21].",
      "Provided clients with data-driven financial advice based on tax analytics[cite: 22].",
      "Trained new staff on digital systems and implemented improved documentation processes[cite: 23]."
    ]
  },
  {
    company: "Walmart E-Commerce",
    role: "Logistics Coordinator / Remedy Analyst",
    dates: "Aug 2021 - Dec 2022",
    location: "Pedricktown, NJ",
    achievements: [
      "Managed SQL and NOVA databases for logistics reporting and issue tracking[cite: 26].",
      "Built a dashboard to monitor Fix-It tickets, improving response time by 25%[cite: 27].",
      "Collaborated with engineers to troubleshoot backend system errors and process automation[cite: 28]."
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