import React from 'react'
import './About.css' 
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/intern_panel_single_cropped.jpg'


const About = () => {
  return (
    <section id ='about'>

      <div className="about">
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
              <small>3+ Years Working Experience</small>
            </article> 

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Students Connected</h5>
              <small>600+ Across North America</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>15+ Complete</small>
            </article>
            
          </div>
          <p>
            I'm a 3rd year Honours Computer Science student at the University of Ottawa.
            One of my most fulfilling roles has been as Co-Director & Developer of <a href="https://uottahack.ca">uOttaHack</a>, Ottawa's largest hackathon. 
            Leading a dedicated team of 30 students, we've planned & executed incredible events in <a href="https://2023.uottahack.ca">2023</a> & <a href="https://2024.uottahack.ca">2024</a>! 
          </p>
          <p>
            Along with uOttaHack, I had the opportunity to work at the <a href="https://www.uottawa.ca/faculty-engineering/spaces/cyber-range">Cyberrange</a>, a lab built in collaboration by IBM & uOttawa.
            We worked on some incredible simulations designed to train & further the skills of seasoned Cybersecurity engineers, along with educating the upcoming generation of future professionals.
          </p>
          <p>
            While interning at <a href="https://gdmissionsystems.ca/">General Dynamics</a>, I deployed AWS infrastructure to develop a cloud based deployment to replace on-prem solutions
            & outdated systems. I also worked on deploying applications in K3S, a lightweight version of Kubernetes to accelerate deployment time. A huge part of my role was to ensure that we stay ahead of the
            technology curve!  
          </p>
          <p>
            Currently I work as a Data Analytics Consultant for <a href="https://cruadjusters.com/">CRU Adjusters</a>.
          </p>
          
          <p>
            Beyond academics & tech, I enjoy teaching! I volunteered for the OCSB International Languages Program, teaching Language classes.
            I've also volunteered with the Beaver Boxing Club, where I've had the privilege to contribute to the development of confident & health-conscious boxers. 
            Some more of my hobbies are learning new languages, playing the guitar, powerlifting & speedcubing!
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