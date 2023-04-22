import React from 'react'
import NAFEEL from '../../assets/Nafeel.jpg'
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {AiOutlineProject} from "react-icons/ai"
import './about.css'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
      <div className="about">
            <img src={NAFEEL} alt="Nafeel Aaqqib" />
          </div>
          <div className="contents">
            <div className="cards">
              <article className="card">
                <FaAward className='icon'/>
                <div className="content">
                  <h5>Experience</h5>
                  <small>3 Months</small>
                </div>
              </article>
              <article className="card">
                <FiUsers className='icon'/>
                <div className="content">
                  <h5>Clients</h5>
                  <small>none</small>
                </div>
              </article>
              <article className="card">
                <AiOutlineProject className='icon'/>
                <div className="content">
                  <h5>Projects</h5>
                  <small>1 Compelted</small>
                </div>
              </article>
            </div>
            <div className='contant-about'>
              <p>Hello I`m Nafeel Aaqib. A freshman in college. I am doing my major in CS.</p>
              <a href="#contact" className="btn">Let's talk</a>
            </div>
          </div>
      </div>   
    </section>
  )
}

export default About