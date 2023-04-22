import React from 'react'
import './navbar.css'
import {AiOutlineHome} from "react-icons/ai"
import {BiBookAlt} from "react-icons/bi"
import {BiUser} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {BiMessageSquareDots} from "react-icons/bi"
import { useState, useEffect} from 'react'
const Navbar = () => {
  const [activeNav,setActieNav] = useState("#home")
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleOnclick = e => {
      let section = e.target.closest("section")
      if (section === null){
        section = e.target.closest("header")
         if (section === null){
          section = e.target.closest("footer")
           if (section === null){
            section = e.target.closest("nav")
              if(section === null)
                return
         }}}
      const activesection = section.getAttribute("id");  
      if (activesection ==="home")
          setActieNav("#home")
      else if(activesection ==="about")
          setActieNav("#about")
      else if(activesection ==="experiences")
          setActieNav("#experiences")
      else if(activesection ==="services")
          setActieNav("#services")
      else if(activesection ==="contact")
          setActieNav("#contact")
      else
          return
    };
    const onScroll = () => {
      setOffset(window.pageYOffset);
      if (offset >= 0 && offset < 600 )
          setActieNav("#home")
      else if(offset >= 600 && offset <1200 )
          setActieNav("#about")
      else if(offset >= 1200 && offset < 1800)
          setActieNav("#experiences")
      else if(offset >= 1800 && offset < 2400)
          setActieNav("#services")
      else if(offset >= 3600 && offset < 4200)
          setActieNav("#contact")
      else
          return
    }

    window.addEventListener('click', handleOnclick);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('click', handleOnclick);
      window.removeEventListener('scroll', onScroll);
    };
  }, [offset]);
  return (

      <nav>
        <a href="#home" onClick={()=>setActieNav("#home")} className={activeNav === '#home' ? 'active' : ""} ><AiOutlineHome/></a>
        <a href="#about" onClick={()=>setActieNav("#about")} className={activeNav === '#about' ? 'active' : ""}><BiUser/></a>
        <a href="#experiences" onClick={()=>setActieNav("#experiences")} className={activeNav === '#experiences' ? 'active' : ""}><BiBookAlt/></a>
        <a href="#services"onClick={()=>setActieNav("#services")} className={activeNav === '#services' ? 'active' : ""}><RiServiceLine/></a>
        <a href="#contact"onClick={()=>setActieNav("#contact")} className={activeNav === '#contact' ? 'active' : ""}><BiMessageSquareDots/></a>
      </nav>

  )
}

export default Navbar