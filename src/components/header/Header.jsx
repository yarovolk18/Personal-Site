import React from 'react'
import './Header.css'
import HeaderSocials from './HeaderSocials.jsx'

const Header = () => {
  return (
    <section id = 'header'>
      <header>
        <div className="container header__container">
          <h3 className = "text-light">Yaro Volkov</h3>
          <h5 className = "text-light"> Fullstack Developer </h5>
          <HeaderSocials/>
        </div>
      </header>
    </section>
    
  )
}

export default Header