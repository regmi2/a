import React from 'react'
import formDataArray from '../../formDataStorage'; 
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,FaLinkedin,
  FaDribbble,
} from 'react-icons/fa'

import {FiSend} from 'react-icons/fi'
import './contact.css'
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react'

const Contact = () => {

  const form = useRef();



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setValidationErrors({
      ...validationErrors,
      [name]: false,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = true;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = true;
    }

    if (formData.message.length < 50) {
      errors.message = true;
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form validation passed
      // Create a JSON object from the form data
      // const submitData = {
      //   name: formData.name,
      //   email: formData.email,
      //   subject: formData.subject,
      //   message: formData.message,
      // };

      // // Convert the object to a JSON string
      // const submitJSON = JSON.stringify(submitData);
      // console.log(submitJSON)

      // // Push the JSON string into the array in formDataStorage.jsx
      // formDataArray.push(submitJSON);
      // console.log(formDataArray)

      // Clear the form fields

      emailjs.sendForm('service_v3dd2mx', 'template_1ngvwjc', form.current, 'VWM6jKcrIUbzXXPLp')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });


      // Display a success message and hide the form
      setFormSubmitted(true);
    }
  };

  if (formSubmitted) {
    return (

      <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy!</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your vision.

          </p>

           <div className="contact__info">

            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

            <div>
            <span className="info__title">Email Me</span>
            <h4 className="info__desc" >regmipallav@gmail.com</h4>
            </div>
          </div>

          <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" /> 

             <div>
            <span className="info__title">Text Me</span>
            <h4 className="info__desc">+1(608) 772-7179</h4>
            </div> 
          </div>
        </div>


<h3 className="contact__title">Social Media </h3>
        <div className="contact__socials">
        
        
          <a href="https://www.linkedin.com/in/regmipallav/"  target="_blank" className="contact__social-link">
            <FaLinkedin />
          </a>

          {/* <a href="https://twitter.com" target="_blank" className="contact__social-link">
            <FaTwitter />
          </a>

          <a href="https://youtube.com"  target="_blank" className="contact__social-link">
            <FaYoutube />
          </a>

          <a href="https://dribbble.com"  target="_blank" className="contact__social-link">
            <FaDribbble />
          </a> */}
        </div>


        </div>


        <div className="success-message">
        <h3>Thank You! I'll get back to you as soon as possible.</h3>
      </div>
      </div>

    </section>

    );
  }
  
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy!</h3>

          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your vision.

          </p>

           <div className="contact__info">

            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

            <div>
            <span className="info__title">Email Me</span>
            <h4 className="info__desc" >regmipallav@gmail.com</h4>
            </div>
          </div>

          <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" /> 

             <div>
            <span className="info__title">Text Me</span>
            <h4 className="info__desc">+1(608) 772-7179</h4>
            </div> 
          </div>
        </div>


<h3 className="contact__title">Social Media </h3>
        <div className="contact__socials">
        
        
          <a href="https://www.linkedin.com/in/regmipallav/"  target="_blank" className="contact__social-link">
            <FaLinkedin />
          </a>

          {/* <a href="https://twitter.com" target="_blank" className="contact__social-link">
            <FaTwitter />
          </a>

          <a href="https://youtube.com"  target="_blank" className="contact__social-link">
            <FaYoutube />
          </a>

          <a href="https://dribbble.com"  target="_blank" className="contact__social-link">
            <FaDribbble />
          </a> */}
        </div>


        </div>


        <form ref={form} onSubmit={handleSubmit} className="contact__form">
          <div className="form__input-group">
            <div className={`form-group ${validationErrors.name ? 'error' : ''} form__input-div`}>
              <input type="text" placeholder='Your name' id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form__control" 
            />
            </div>
            <div className={`form-group ${validationErrors.email ? 'error' : ''} form__input-div`}>
              <input type="email" placeholder='Your Email' id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange} className="form__control" />
            </div>


            <div className="form__input-div">
              <input type="text" 
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              
              placeholder='Your Subject' className="form__control" />
            </div>
          </div>

          <div className={`form-group ${validationErrors.message ? 'error' : ''}form__input-div`}>
            <textarea   id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange} cols="30" rows="10" 
            className="form__control textarea">

            </textarea>
          </div>

          <button type="submit" className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>


        </form>
      </div>

    </section>
  )
}

export default Contact