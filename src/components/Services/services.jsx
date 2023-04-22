import React from 'react'
import './services.css'
import {TbWorld} from 'react-icons/tb'
import {FaUserCircle} from "react-icons/fa"
import {MdGraphicEq} from "react-icons/md"
import WebDev from '../../assets/webdev.jpg'
import Content from '../../assets/Content.jpg'
import UIUX from '../../assets/UIUX.png'

import { useState, useRef, useEffect} from 'react'
const Services = () => {
  const [activePanel,setActiePanel] = useState("")
  const ref = useRef(null);
  useEffect(() => {
    const handleClick = e => {
      const panel = e.target.closest(".services-panel")
      const activepanel = panel.getAttribute("id")
      if(activepanel === "panel2")
        setActiePanel("panel2")
      else if(activepanel === "panel3")
        setActiePanel("panel3")
      else
        setActiePanel("panel1")
      return true
    };
    setActiePanel("panel1")

    const element = ref.current;

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);
  return (
<section id="services">
  <h5>What can I offer</h5>
  <h2>My Services</h2>
  <div className="container services__container">
    <div id='services-contents' className="services-contents" ref={ref}>
          <div className="services-panel" id='panel2'>
            <h2 id='panel2-heading'>
              <button
                onClick={()=>setActiePanel("panel2")} className={activePanel === 'panel2' ? 'activepanel' : "panel1"}  
                aria-controls='panel2-content'>
                <span id="panal2-title" aria-hidden="false">UI/UX</span>
                <MdGraphicEq className='services-icon'/>
              </button>
            </h2>
            <div
              className="services-content"
              id="panel2-content"
              aria-labelledby='panel2-heading'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, modi?</p>
                <img className='services-image' src={UIUX} alt="UI UX Design" />

              </div>
          </div>
          <div className="services-panel" id='panel1'>
            <h2 id='panel1-heading'>
              <button
                onClick={()=>setActiePanel("panel1")} className={activePanel === 'panel1' ? 'activepanel' : "ActivePanel"} 
                aria-controls='panel1-content'>
                <span id="panal1-title" aria-hidden="false">Web Development</span>
                <TbWorld className='services-icon'/>
              </button>
            </h2>
            <div
              className="services-content"
              id="panel1-content"
              aria-labelledby='panel1-heading'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, modi?</p>
                <img className='services-image' src={WebDev} alt="Web Dev" />

              </div>
          </div>
          <div className="services-panel" id='panel3'>
            <h2 id='panel3-heading'>
              <button
                onClick={()=>setActiePanel("panel3")} className={activePanel === 'panel3' ? 'activepanel' : "panel1"}  
                aria-controls='panel3-content'>
                <span id="panal3-title" aria-hidden="false">Content Creation</span>
                <FaUserCircle className='services-icon'/>
              </button>
            </h2>
            <div
              className="services-content"
              id="panel3-content"
              aria-labelledby='panel3-heading'>            
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, modi?</p>
                <img className='services-image' src={Content} alt="Content Creation" />

              </div>
          </div>
    </div>
  </div>
</section>
  )
}

export default Services