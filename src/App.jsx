import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { TechStrip, About, Skills } from './components/AboutSkills';
import Projects from './components/Projects';
import { Experience, Github, Contact, Footer } from './components/Sections';
import RagAgent from './components/RagAgent';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStrip />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Github />
      <Contact />
      <Footer />
      <RagAgent />
    </>
  );
}
