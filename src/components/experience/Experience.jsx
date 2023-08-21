import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id = 'experience'>
      
      <div className="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>

      <div className="container experience__container">
        <div className="experience__frontend">
        {/*Beginning of FrontEnd*/}
          <h3>Frontend Development</h3>
            <div className="experience__content">
              <article classname='experience__details'>
                <BsPatchCheckFill/>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                <BsPatchCheckFill/>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
              </article>
              <article classname='experience__details'>
                <BsPatchCheckFill/>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                <BsPatchCheckFill/>
                  <h4>BootStrap</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                <BsPatchCheckFill/>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                <BsPatchCheckFill/>
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
              </article>
            </div>
        </div>
        {/*End of FrontEnd*/}

        {/*Beginning of BackEnd*/}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
              <article classname='experience__details'>
                <BsPatchCheckFill/>
                  <h4>Node JS</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                <BsPatchCheckFill/>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Intermediate</small>
              </article>
              <article classname='experience__details'>
                <BsPatchCheckFill/>
                  <h4>PHP</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                <BsPatchCheckFill/>
                  <h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                <BsPatchCheckFill/>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                <BsPatchCheckFill/>
                  <h4>Firebase</h4>
                  <small className='text-light'>Experienced</small>
              </article>
            </div>
        </div>
        {/*End of FrontEnd*/}
      </div>
    </section>
  )
}

export default Experience