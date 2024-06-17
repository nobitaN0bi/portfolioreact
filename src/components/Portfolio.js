import React from 'react';
import '../styles/Portfolio.css';
import Tile from './Tile';

const Portfolio = () => {
  const projects = [
    {
      title: 'AI Medical Chatbot',
      description: 'Developed a medical chatbot to assist users with medical queries efficiently.',
      technologies: 'Python, Flask, Langchain, Pinecone, LLM Model',
      date: 'May 2024',
      details: [
        'Optimized for fast query resolution, ensuring responses within milliseconds.',
        'Trained on medical documents to provide accurate responses to user queries.',
        'Designed to improve user experience by providing quick and accurate responses to medical queries.',
        'Scalability: Pinecone allows for easy scaling to handle large volumes of data and user requests.',
      ],
      img: `${process.env.PUBLIC_URL}/image (1).png` ,
      
    },
    {
      title: 'Yulu Data Analysis',
      description: 'Analyzed weather data to understand its impact on seasonal choices.',
      technologies: 'Python, Pandas, NumPy, Matplotlib, Seaborn, SciPy',
      date: 'May 2024',
      details: [
        'Conducted hypothesis tests including T-Test, Chi-Square Test, ANOVA Test, and Correlation Test.',
        'Analyzed the effect of weather conditions on the choice of season.',
      ],
      img: `${process.env.PUBLIC_URL}/Screenshot from 2024-06-07 12-46-24.png`,
    },
    {
      title: 'Event Management System Backend',
      description: 'Developed a backend system for managing events, participants, venues, and organizers.',
      technologies: 'Java, Spring Boot, MySQL, Hibernate ORM',
      date: 'April 2024',
      details: [
        'Developed RESTful API for event details, participants, venues, and organizer profiles.',
        'Maintained data integrity and added logging for debugging and usage tracking.',
      ],
      img: `${process.env.PUBLIC_URL}/image (2).png`
    },
    {
      title: 'Image Editor using Java',
      description: 'Built a command-line tool for image processing tasks.',
      technologies: 'Java, BufferedImage Library',
      date: 'September 2024',
      details: [
        'Developed a tool for pixel-wise image processing operations.',
        'Implemented features like grayscale conversion, adjustments, flipping, rotation, blur, filters, and upscaling.',
      ],
      img: `${process.env.PUBLIC_URL}/WhatsApp Image 2024-06-07 at 12.58.23 PM.jpeg` ,
    },
    {
      title: 'Apple Clone Site',
      description: 'Created a website replicating the visual style of Apple.com.',
      technologies: 'HTML, CSS, JavaScript ', // Add specific frameworks if used
      date: 'Uncertain', // Add date if known
      details:[
        'loremipsum',
        'hehe'
      ],
      img: `${process.env.PUBLIC_URL}/Screenshot from 2024-06-17 17-50-14.png` ,
    },
  ];
  

  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <Tile 
          key={index}
          header={project.title}
          subHeader={project.technologies}
          text={project.description}
          img={project.img}
          link={project.repo}
          linkText="View Project"
          position="left" 
        />
      ))}
    </div>
  );
};

export default Portfolio;