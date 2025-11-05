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
  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition duration-300">
    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="text-2xl font-bold text-gray-900">{role}</h3>
        <p className="text-lg font-medium text-indigo-600">{company}</p>
      </div>
      <div className="text-right">
        <p className="text-md font-semibold text-gray-700">{dates}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
    
    <ul className="space-y-2 pt-2 list-disc list-inside text-gray-700">
      {achievements.map((item, index) => (
        <li key={index} className="pl-1">
          {/* Note: The resume citations are included here but should be removed 
             for the final deployed portfolio text. */}
          {item} 
        </li>
      ))}
    </ul>
  </div>
);


const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
          <span className="border-b-4 border-indigo-500 pb-1">Professional Experience</span>
        </h2>
        
        <div className="space-y-10">
          {experienceData.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;