import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className = 'header__socials'>
      <div className="github__icons">
        <a href="https://linkedin.com/in/iaroslav-volkov/" target="_self" ><BsLinkedin/></a>
      </div>
      <div className="github__icons">
        <a href="https://github.com/yarovolk18/" target="_self"><BsGithub/></a>
      </div>
      <div className="github__icons">
       <a href="https://instagram.com/uottahack/" target="_self"><BsInstagram/></a>
      </div>
    </div>
  )
}

export default HeaderSocials