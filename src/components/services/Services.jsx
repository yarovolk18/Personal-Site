import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id = 'services'>
      
      <div className="services">
        <h2>What I Offer</h2>
      </div>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

         {/* UI/UX */}
          <ul className='service__list'>
            
          <li>
            <BiCheck className='service__list-icon' />
            <p>Figma</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Canva</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Adobe Photoshop</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>GIMP</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>MS Paint</p>
          </li>
            
          </ul>

         {/* END OF UI/UX */}

        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

         {/* WEB DEVELOPMENT */}
          <ul className='service__list'>
            
          <li>
            <BiCheck className='service__list-icon' />
            <p>React.js </p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Angular.js</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Vue.js</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Bootstrap for CSS</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>DigitalOcean</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>AWS</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Jenkins</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Circle CI</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Travel CI</p>
          </li>
          </ul>

         {/* END OF WEB DEVELOPMENT */}

        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

         {/* CONTENT CREATION */}
          <ul className='service__list'>
            
          <li>
            <BiCheck className='service__list-icon' />
            <p>Instagram</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Tik Tok</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>Adobe Premiere</p>
          </li>
          <li>
            <BiCheck className='service__list-icon' />
            <p>iMovie</p>
          </li>
          </ul>

         {/* END OF CONTENT CREATION */}

        </article>
      </div>
    </section>
    
  )
}

export default Services