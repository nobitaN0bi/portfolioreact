import React from 'react';
import '../styles/Hero.css';

class Hero extends React.Component {
    state = {
      words: ['Creative', 'Analytical', 'Visionary', 'Pragmatic'],
      currentWordIndex: 0,
    };
  
    componentDidMount() {
      this.wordChangeInterval = setInterval(() => {
        this.setState(prevState => ({
          currentWordIndex: (prevState.currentWordIndex + 1) % prevState.words.length
        }));
      }, 2000); // change word every 2 seconds
    }
  
    componentWillUnmount() {
      clearInterval(this.wordChangeInterval);
    }
  
    render() {
      return (
        <div className="hero">
  <div className='hero-section'>
    <div>
      <h1>Hey, This is nobitaN0bi <span className="wave-emoji">👋</span></h1>
      <h2>A <span className="highlight-word">{this.state.words[this.state.currentWordIndex]}</span> tech enthusiast.</h2>
      <div>
        <a href="#resume" className="cta-button">Download My Resume</a>
        <a href="#contact" className="cta-button">Contact Me</a>
      </div>
    </div>
    <div style={{display: 'inline-block'}}>
      <img src={`${process.env.PUBLIC_URL}/portfoliotrial.jpeg`} alt="NobitaN0bi" />
    </div>
  </div>
</div>
      );
    }
  }
  
  export default Hero;