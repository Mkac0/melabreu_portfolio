# 🚀 Melissa Abreu's Developer Portfolio
![Melissa Abreu](https://i.imgur.com/UmckA8p.png)

This is the source code for my personal developer portfolio, which showcases my skills, experience, and projects as a full-stack engineer.

### Key Features ✨

+ Responsive Design: Fully optimized layout for desktop, tablet, and mobile devices.

+ Modular Component Structure: Built with React to ensure code reusability and maintainability (e.g., `ProjectCard.jsx`, `EducationAndCert.jsx`).

+ Dynamic Data Handling: Content for skills, projects, and education is managed via separate data files (`SkillsData.js`, `ProjectsData.js`, etc.) for easy updates.

+ Contact Form Integration: Includes a functional contact form powered by Formspree to receive direct messages.


### Tech Stack 💻

This project is built using modern front-end technologies:

+ Frontend Framework: React (using functional components and hooks)

+ Build Tool: Vite (for fast development and optimized production builds)

+ Styling: Custom CSS (with a focus on a cohesive and professional green/teal color scheme)

+ Icons: React Icons (`react-icons`)

+ Hosting: Vercel (or Netlify/GitHub Pages)


### Projects Featured

This portfolio includes details and links to key projects, such as:

+ Cook 'Up (AI Recipe Generator): A MERN Stack CRUD App built to combine AI-powered creativity with culinary skills.

+ Tellin' (Photo/Story App): A CRUD app designed to save your best photographs, poems, and short stories.


### Setup and Installation ⚙️

1. Clone the repository:

    Bash
    ```
        git clone https://github.com/Mkac0/melabreu_portfolio.git
        cd melabreu_portfolio/portfolio # Or wherever your package.json is located
    ```

2. Install Dependencies:

    Bash

    ```
        npm install
    ```

4. Create Production Build:

    Bash

    ```
        npm run build
    ```


### Deployment Information 🌐

[Live Site](https://mabreu-portfolio.vercel.app/)

Contact Form: Integrated with Formspree for message submission (requires placing the unique Formspree URL in `src/components/Contact.jsx`).