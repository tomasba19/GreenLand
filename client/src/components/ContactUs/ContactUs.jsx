import React, { useState, useRef } from 'react';
import style from './ContactUs.module.css'
import emailjs from '@emailjs/browser';
import githubIcon from "../../assets/githubicon.png"
import linkedinIcon from "../../assets/linkedingicon.png"
import ceroWaste from "../../assets/CeroWasteCycle.avif"

export const ContactUs = () => {

const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const ref = useRef()
  const [success,setSuccess] = useState(null)

  const handleSubmit = event => {
    event.preventDefault();

    emailjs.sendForm('service_0nrvtlo', 'template_h09ak9q', ref.current, 'HFA10L3-dlaZZcGA1')
    .then((result) => {
        console.log(result.text);
        setSuccess(true)
    }, (error) => {
        console.log(error.text);
        setSuccess(false)
    });


  };


  return (
    <div className={style.contactUs}>
        <form ref={ref} onSubmit={handleSubmit} className={style.contactForm}>
            <h2>Contact Us <hr/></h2>
          <div className={style.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleInputChange}></textarea>
          </div>
          <div className={style.formGroup}>
            <button type="submit">Submit</button>
            {success && "Your message has been sent. We'll get back to you soon!"}
          </div>
          <div className={style.contactLinks}>
            <h2>Find Us on <hr/></h2>
          <a href="https://linktr.ee/greenlandpf" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://linktr.ee/greenlandpf" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
        </form>
    
        
        <div className={style.imageContainer}>
        <img src={ceroWaste} alt="imagen del costado" />
        </div>
    
    </div>
  );
};