import React from 'react'
import './Header.css'
import CTA from './CTA.jsx'
import HeaderSocials from './HeaderSocials.jsx'

import uOttaPanorama from '../../assets/uOttaPanorama.jpg'

const Header = () => {
  return (
    <section id = 'header'>
      <header>
        <div className="container header__container">
          <h5>Hello I'm </h5>
          <h1>Yaro Volk</h1>
          <h5 className = "text-light"> Fullstack Developer </h5>

          <div className="above__row">
            <HeaderSocials /> 
            <CTA />
          </div>
          
          <div className = 'me'>
            <img src={uOttaPanorama} alt="me" />
          </div>
          
        </div>
        
      </header>
    </section>
    
  )
}

export default Header