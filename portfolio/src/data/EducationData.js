import GALogo from '../assets/logos/ga.png'; 
import QCLogo from '../assets/logos/qc.png';
import BMCCLogo from '../assets/logos/bmcc.png';
import GoogleLogo from '../assets/logos/google.png';
import ATPLogo from '../assets/logos/la-guardia.png';

export const education = [
  {
    degree: "Advance Software Engineering Immersive Program",
    institution: "General Assembly",
    date: "Oct 2025",
    details: ["Built robust back-end applications using Node.js/Express, Python/Django, SQL/NoSQL databases, and trained in MVC, REST APIs, and Git/GitHub workflow."], 
    logo: GALogo,
  },
  {
    degree: "Bachelor of Arts in Economics",
    institution: "Queens College, City University of New York",
    date: "May 2020",
    logo: QCLogo,
    details: [
      "Related Coursework: Price Theory, Econometrics, Business & Economics, Statistics",
      "Member, Alliance of Latin American Students (ALAS)",
    ],
  },
  {
    degree: "Associate of Arts in Liberal Arts",
    institution: "Borough of Manhattan Community College",
    date: "Jun 2016",
    details: [
      "Member, Freshman Learning Academy (FLA)",
    ],
    logo: BMCCLogo,
  },
];

export const certifications = [
  { 
    name: "Google Foundation of User Experience (UX) Design", 
    date: "Jun 2024" ,
    logo: GoogleLogo,
    link: "https://www.coursera.org/account/accomplishments/verify/KQEDVTZ8HA4P"
  },
  { 
    name: "Accredited Tax Preparer (ATP)", 
    date: "May 2019" ,
    logo: ATPLogo
  },
];
