import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id = 'experience'>
      
      <div className="experience">
        <h2>My Experience</h2>
      </div>

      <div className="container experience__container">
        <div className="experience__frontend">
        {/*Beginning of FrontEnd*/}
          <h3>Frontend</h3>
            <div className="experience__content">
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> HTML</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> CSS</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> JavaScript</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> BootStrap</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> Next.js</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> React.js</h4>
                  <small className='text-light'>Experienced</small>
              </article>
            </div>
        </div>
        {/*End of FrontEnd*/}

        {/*Beginning of BackEnd*/}
        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> PostgreSQL</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> MongoDB</h4>
                  <small className='text-light'>Intermediate</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> NoSQL</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> MySQL</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> Python</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> Firebase</h4>
                  <small className='text-light'>Experienced</small>
              </article>
            </div>
        </div>
        {/*End of Backend*/}
        {/*Beginning of DevOps*/}
        <div className="experience__backend">
          <h3>DevOps</h3>
          <div className="experience__content">
              <article classname='experience__details'>
                <h4><BsPatchCheckFill/> Docker</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> Docker-Compose</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> Kubernetes</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> CI/CD</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> Powershell</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> Perl</h4>
                  <small className='text-light'>Intermediate</small>
              </article>
            </div>
        </div>
        {/*End of Embedded*/}
        <div className="experience__backend">
          <h3>Embedded</h3>
          <div className="experience__content">
              <article classname='experience__details'>
                <h4><BsPatchCheckFill/> C++</h4>
                <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> C</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> Assembly</h4>
                  <small className='text-light'>Beginner</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> QNX</h4>
                  <small className='text-light'>Beginner</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> Unix</h4>
                  <small className='text-light'>Experienced</small>
              </article>
              <article classname='experience__details'>
                  <h4><BsPatchCheckFill/> FPGA</h4>
                  <small className='text-light'>Beginner</small>
              </article>
            </div>
        </div>
        {/*End of Embedded*/}
      </div>
    </section>
  )
}

export default Experience