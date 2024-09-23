import React from 'react'
import './Footer.css'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <h2><a href="#footer" className='footer_logo'>Iaroslav Volkov</a></h2>

      <ul className='permalinks'>
        <a href='#header'>Home</a>
        <a href='#about'>About Me</a>
        <a href='#experience'>Experience</a>
        <a href='#services'>Services</a>
        <a href='#contact'>Contact</a>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/uottahack"><FiInstagram/></a>
        <a href="https://linkedin.com/in/yaro-volkov"><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Iaroslav Volkov. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer