import React from 'react';
import '../styles/Skills.css';
import { FaPython, FaJava, FaCode, FaJs, FaHtml5, FaCss3, FaDart, FaVisualStudio, FaVim, FaPycharm, FaIntellij, FaFigma, FaLinux, FaGithub, FaGit, FaDatabase, FaNodeJs } from 'react-icons/fa';

class Skills extends React.Component {
    render() {
      return (
        <div className="skills">
          <h1>Skills & Tools</h1>
          <div className="skill-section">
            <h2>Languages</h2>
            <div className="skill-list">
              <FaPython /><span>Python</span>
              <FaJava /><span>Java</span>
              <FaCode /><span>C</span>
              <FaJs /><span>JavaScript</span>
              <FaDart /><span>Dart</span>
              <FaHtml5 /><span>HTML</span>
              <FaCss3 /><span>CSS</span>
            </div>
          </div>
          <div className="skill-section">
            <h2>Developer Tools</h2>
            <div className="skill-list">
              <FaVisualStudio /><span>VS Code</span>
              <FaVim /><span>Vim</span>
              <FaPycharm /><span>PyCharm</span>
              <FaIntellij /><span>Intellij Idea Ultimate</span>
              <FaFigma /><span>Figma</span>
            </div>
          </div>
          <div className="skill-section">
            <h2>Technologies/Frameworks</h2>
            <div className="skill-list">
              <FaLinux /><span>Linux</span>
              <FaGithub /><span>GitHub</span>
              <FaNodeJs /><span>ExpressJS</span>
              <FaGit /><span>Git</span>
              <FaDatabase /><span>Mongo</span>
            </div>
          </div>
        </div>
      );
    }
}

export default Skills;