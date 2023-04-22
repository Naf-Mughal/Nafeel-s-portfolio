import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {SiGmail} from "react-icons/si"
const footer = () => {
  return (
<footer id="footer">
  <a href="#home" className="footer__logo">Nafeel</a>
  <ul className="weblinks">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#experiences">Experiences</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#testimonials">Testimonials</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <div className="footer__socials">
    <a href="https://www.facebook.com/nafeel.aaqib"><FaFacebookF/></a>
    <a href="https://www.instagram.com/nafeelaaqib/" target="_blank" rel="noreferrer"><BsInstagram/></a>
    <a href="mailto:nafeelaaqib@gmail.com"><SiGmail/></a>
  </div>
  <div className="footer__copyrights">
    <small>&copy;Nafeel. All rights reserved.</small>
  </div>
</footer>
  )
}

export default footer