import React from 'react'

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from 'react-icons/fa'

import {FiSend} from 'react-icons/fi'
import './contact.css'

const Contact = () => {
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

          {/* <div className="contact__info">

            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

            <div>
            <span className="info__title">Email Me</span>
            <h4 className="info__desc">regmipallav@gmail.com</h4>
            </div>
          </div>

          <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" /> 

             <div>
            <span className="info__title">Text Me</span>
            <h4 className="info__desc">+1(608) 772-7179</h4>
            </div> 
          </div>
        </div>*/}


<h3 className="contact__title">Social Media </h3>
        <div className="contact__socials">
        
        
          <a href="https://facebook.com"  target="_blank" className="contact__social-link">
            <FaFacebookF />
          </a>

          <a href="https://twitter.com" target="_blank" className="contact__social-link">
            <FaTwitter />
          </a>

          <a href="https://youtube.com"  target="_blank" className="contact__social-link">
            <FaYoutube />
          </a>

          <a href="https://dribbble.com"  target="_blank" className="contact__social-link">
            <FaDribbble />
          </a>
        </div>


        </div>


        <form action="" className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder='Your name' className="form__control" />
            </div>
            <div className="form__input-div">
              <input type="email" placeholder='Your Email' className="form__control" />
            </div>
            <div className="form__input-div">
              <input type="text" placeholder='Your Subject' className="form__control" />
            </div>
          </div>

          <div className="form__input-div">
            <textarea name="" id="" cols="30" rows="10" className="form__control textarea">

            </textarea>
          </div>

          <button className="button">
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
