import React from 'react'
import './About.css' 
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/me2.jpg'

const About = () => {
  return (
    <section id ='about'>

      <div className="about">
        <h5>Get to Know</h5>
        <h2>About Me</h2>
      </div>
     

    
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src = {ME} alt = ""/>
          </div>
        </div>

        <div className="about__content"> 
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working Experience</small>
            </article> 

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <a href="https://github.com/yarovolk18/" target="_self"><VscFolderLibrary/></a>
              <h5>Projects</h5>
              <small>15+ Complete</small>
            </article>
            
          </div>
          <p>
          I'm a computer science student currently enrolled at the University of Ottawa, 
          and I'm excited to share my journey and experiences so far. One of my most fulfilling roles 
          has been as Co-Director and Developer of uOttaHack, Ottawa's prominent hackathon. Collaborating 
          with a dedicated team of 30 students, we've planned and executed memorable hackathon 
          events. My contributions to the uOttaHack website, livesite, and uOttaApp have been pivotal in 
          accommodating over 500 students from various universities for uOttaHack 2023. Beyond academics and tech,
          I'm passionate about education, as evidenced by my involvement in the OCSB International Languages Program. 
          Furthermore, my commitment to community well-being is reflected in my active engagement with the Beaver Boxing Club, 
          where I've had the privilege to contribute to the development of confident and health-conscious youth. Another of my hobbies
          is learning languages. I enjoy playing music, powerlifting, and speedcubing as well. I am cuurently employed at <a href="https://https://gdmissionsystems.ca/">GDMS</a> as an IT Student.
          </p>
        </div>

        <div className="about__button">
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>

        
        </div>
    </section>
  )
}

export default About