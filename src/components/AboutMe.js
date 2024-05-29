import React from 'react';
import '../styles/AboutMe.css';

class AboutMe extends React.Component {
    render() {
      return (
        <div className="about-me">
          <h1>About Me <span className="small-emoji">📚</span><span className="small-emoji">🧮</span></h1>
          <div className="content">
            <span className="large-emoji">🤓</span>
            <div className="description">
              <p>Tech whiz bridges logic & creativity. Builds tools & UseMath(), but secretly dreams of coding art installations.By day, I tackle complex algorithms and optimize code for lightning speed. Yet, after work, my mind wanders to interactive exhibits and data-driven sculptures. I believe technology can not only solve problems but also inspire and ignite emotions. That's why I'm always learning new tools, from Python libraries to animation software.Building an AI medical chatbot wasn't just about efficiency; it was about using technology to empower users with knowledge. Analyzing weather data wasn't just numbers; it was about understanding patterns that could impact people's lives.This insatiable curiosity and desire to bridge the gap between logic and art fuel my every project. Maybe someday, my creation will hang in a museum, a testament to the fusion of reason and imagination. Until then, I'll keep exploring the intersection of technology and human experience, one line of code at a time.</p>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default AboutMe;