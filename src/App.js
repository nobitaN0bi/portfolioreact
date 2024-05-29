import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div className="App" onMouseMove={onMouseMove}>
      <div className="cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about-me">
        <AboutMe />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="skills">
        <Skills />  
      </div>
      <div id="coming-soon">
        <Blog />  
      </div>
      <div id="contact-container">
        <Contact />
      </div>
    </div>
  );
}

export default App;