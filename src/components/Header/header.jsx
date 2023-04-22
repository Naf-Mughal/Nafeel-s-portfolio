/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './header.css'
import CV from '../../assets/Cv.pdf'
import ME from '../../assets/me.jpg'
import {AiFillGithub} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {SiGmail} from "react-icons/si"
const Header = () => {
  return (
<header id='home'>
  <div className="container header__container">
    <h5>Hello I'm</h5>
    <h1>Nafeel Aaqib</h1>
    <h5 className="text-light">Fulstack Developer</h5>
    <div className="cta">
      <a href={CV} download className="btn">Download</a>
      <a href="#contact" className='btn'>Let's Talk</a>
    </div>
    <div className="me">
      <div className="me-card">
      <img src={ME} alt="Nafeel Aaqib" class='image'/>
    </div>
    </div>
    <a href="#contact" className="scroll__down">Scroll Down</a>
    <div className="header__socials">
      <a href="https://github.com/Naf-Mughal" target="_blank"><AiFillGithub/></a>
      <a href="https://www.instagram.com/nafeelaaqib/" target="_blank"><AiOutlineInstagram/></a>
      <a href="mailto:nafeelaaqib@gmail.com" target="_blank"><SiGmail/></a>
    </div>
  </div>
</header>
  )
}

export default Header