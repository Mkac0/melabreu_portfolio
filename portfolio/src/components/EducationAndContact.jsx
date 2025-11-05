import React from 'react';

const educationData = [
  {
    institution: "General Assembly",
    degree: "Advance Software Engineering Immersive Program",
    date: "Oct 2025",
    details: ["Completed full-stack development curriculum focusing on React, Node.js, and modern software engineering practices."],
  },
  {
    institution: "Queens College, City University of New York",
    degree: "Bachelor of Arts in Economics",
    date: "May 2020",
    details: ["Related Coursework: Price Theory, Econometrics, Business & Economics, Statistics.", "Member, Alliance of Latin American Students (ALAS)."],
  },
  {
    institution: "Borough of Manhattan Community College",
    degree: "Associate of Arts in Liberal Arts",
    date: "Jun 2016",
    details: ["Member, Freshman Learning Academy (FLA)."],
  },
];

const certificationsData = [
  {
    name: "Google Foundation of User Experience (UX) Design",
    date: "Jun 2024",
  },
  {
    name: "Accredited Tax Preparer (ATP) - La Guardia CC",
    date: "May 2019",
  },
];

const EducationAndContact = () => {
  return (
    <>
      <section id="education" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-16">
            <span className="border-b-4 border-indigo-500 pb-1">Education & Certifications</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-xl shadow-md transition duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                <p className="text-indigo-600 font-semibold">{edu.institution}</p>
                <p className="text-sm text-gray-500 mb-4">{edu.date}</p>
                <ul className="space-y-1 text-gray-700 list-disc list-inside">
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {certificationsData.map((cert, index) => (
                <div 
                  key={index} 
                  className="px-6 py-2 border-2 border-indigo-300 text-indigo-800 font-medium rounded-full bg-indigo-50 shadow-sm"
                >
                  {cert.name} ({cert.date})
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-10 footer-section">
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-white mb-4">Let's Connect</h3>
          <div className="flex justify-center space-x-6 text-white text-lg mb-8">
            <a href="mailto:melissa.abreu84@gmail.com" className="hover:text-indigo-400 transition">
              <span className="font-semibold">Email:</span> melissa.abreu84@gmail.com
            </a>
            <span>|</span>
            <a 
              href="https://www.linkedin.com/in/melissaabreu-profile" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-indigo-400 transition"
            >
              LinkedIn
            </a>
            <span>|</span>
            <a 
              href="https://github.com/Mkac0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-indigo-400 transition"
            >
              GitHub
            </a>
          </div>
          
          <p className="text-gray-400 text-sm mt-8">
            &copy; {new Date().getFullYear()} Melissa Abreu. All Rights Reserved.
          </p>
          
          <p className="text-gray-400 text-sm">
            Built with React.
          </p>
        </div>
      </footer>
    </>
  );
};

export default EducationAndContact;