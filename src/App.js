import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
    </>
  );
}

export default App;