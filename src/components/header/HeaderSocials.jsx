import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {MdOutlineContactPage} from "react-icons/md";
import { RiKakaoTalkLine } from "react-icons/ri";
import CV from '../../assets/Iaroslav (Yaro) Volkov 2024.pdf'



const HeaderSocials = () => {
  return (
    <div className = 'header__socials'>
      <a href="https://linkedin.com/in/yaro-volkov/" target="_self" className="github__icons"><BsLinkedin/></a>
      <a href="https://github.com/yarovolk18/" target="_self" className="github__icons"><BsGithub/></a>
      <a href = {CV} download target="_self" className="github__icons"><MdOutlineContactPage/></a>
      <a href='#contact' target="_self" className="github__icons"><RiKakaoTalkLine/></a>
      <a href="https://instagram.com/uottahack/" target="_self" className="github__icons"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials