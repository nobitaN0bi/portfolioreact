import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';
const Contact = () => {
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kuwcg8o', 'template_x1q1376', e.target, 'qGIhdQv6IoqXTdT5g')
      .then((result) => {
          console.log(result.text);
          setResult(true);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <div className="contact-container">
      <h1>Contact ME!</h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <input type="submit" value="Send" />
      </form>
      {result ? <p>Your message has been sent successfully!</p> : null}
    </div>
  );
 
  
};

export default Contact;