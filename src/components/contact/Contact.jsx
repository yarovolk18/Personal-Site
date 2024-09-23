import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

      e.preventDefault();

      emailjs.sendForm('service_e79fism', 'template_ho0v1vh', form.current, '1tgnV0RC-iih007MT');

      e.target.reset();
  };
  return (
    <section id = 'contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/*EMAIL START*/}
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h1>Email</h1>
            <h5>iaroslav.volkov18@gmail.com</h5>
            <a href="mailto:iaroslav.volkov18@gmail.com" target="_self" className='btn-primary'>Send me a message</a>
          </article>
          {/*EMAIL END*/}
          {/*MESSENGER START*/}
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h1>Messenger</h1>
            <h5>613-276-7657</h5>
            <a href="https://api.whatsapp.com/send?phone=6132767657" target="_self" className='btn-primary'> Send me a message</a>
          </article>
          {/*MESSENGER END*/}
        </div>
  
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" rows="10" placeholder='Your Message' required ></textarea>
        <button  type='submit' className='btn btn-primary'>Send Message</button>
        
      </form>
    </div>
    </section>
  )
}

export default Contact