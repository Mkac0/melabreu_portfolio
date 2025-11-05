import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Experience from './components/Experience';
import EducationAndContact from './components/EducationAndContact';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero /> 
      <Skills />
      <Projects />
      <Experience />
      <EducationAndContact />
    </div>
  );
}

export default App;
