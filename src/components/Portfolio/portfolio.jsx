import Img from "../../assets/download.jpg"
import React from 'react'
import './portfolio.css'
import {AiFillGithub} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {SiGmail} from "react-icons/si"
const Portfolio = () => {
  const data =[
    {
      itemid:1,
      title:"My Portfolio",
      image:Img,
      description:"This was my first react project",
      link:"https://github.com/Naf-Mughal"
    },
    {
      itemid:2,
      title:"Dummy",
      image:Img,
      description:"This is a dummy react project",
      link:"https://github.com/Naf-Mughal"
    },
    {
      itemid:3,
      title:"Dummy",
      image:Img,
      description:"This is a dummy react project",
      link:"https://github.com/Naf-Mughal"
    },
    {
      itemid:4,
      title:"Dummy",
      image:Img,
      description:"This is a dummy react project",
      link:"https://github.com/Naf-Mughal"
    },
    {
      itemid:5,
      title:"Dummy",
      image:Img,
      description:"This is a dummy react project",
      link:"https://github.com/Naf-Mughal"
    },
    {
      itemid:6,
      title:"Dummy",
      image:Img,
      description:"This is a dummy react project",
      link:"https://github.com/Naf-Mughal"
    },

]
  return (
<section id="portfolio">
  <h5>What I worked on</h5>
  <h2>My projects</h2>
  <div className="container portfolio__container">
    <div className="portfolio-card">
      <div className="portfolio-fg">
        <div className="portfolio__contents">
          {
            data.map(({itemid,title,image,link,description})=>{
              return (
                <div className="portfolio__item" key={itemid}>
                  <div className="portfolio__item-front">
                    <h5 className="front-itemid">{itemid}</h5>
                    <img src={image} alt={title} className="front-img" />
                    <h5 className="frontheading">{title}</h5>
                  </div>
                  <div className="portfolio__item-back">
                    <p className="back-description text-light">{description}</p>
                    <a href={link} className="back-btn">{title}</a>
                    <div className="back-socials">
                      <a href="https://github.com/Naf-Mughal" target="_blank" rel="noreferrer" className="back-social"><AiFillGithub/></a>
                      <a href="https://www.instagram.com/nafeelaaqib/" target="_blank" rel="noreferrer" className="back-social"><AiOutlineInstagram/></a>
                      <a href="mailto:nafeelaaqib@gmail.com" target="_blank" rel="noreferrer" className="back-social"><SiGmail/></a>
                    </div>
                  </div>
                  <div className="portfolio__item-background">
                    <h5 className="back-itemid">{itemid}</h5>
                    <img src={image} alt=""  className="back-img"/>
                  </div>
                </div>
              )
            })
          }
        </div>
       </div>
    </div>
  </div>
</section>
  )
}

export default Portfolio