// components/Navbar.js

import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css'; // Import your CSS file

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <span>nobitaN0bi</span>
    </div>
    <div className="links">
      
        <Link to="hero" className="link" smooth={true} duration={500}>Home</Link>
        <Link to="about-me" className="link" smooth={true} duration={500}>About</Link>
        <Link to="portfolio" className="link" smooth={true} duration={500}>Portfolio</Link>
        <Link to="skills" className="link" smooth={true} duration={500}>Skills</Link>
        <Link to="coming-soon" className="link" smooth={true} duration={500}>Blog</Link>
        <Link to="contact-container" className="link" smooth={true} duration={500}>Contact</Link>
      
    </div>
  </nav>
);

export default Navbar;