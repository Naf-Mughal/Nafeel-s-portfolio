import React from 'react'
import './experiences.css'
import {AiOutlineCheckCircle} from "react-icons/ai"
const experiences = () => {
  return (
    <section id="experiences">
      <h5>What skills do i have</h5>
      <h2>My Experiences</h2>
      <div className="container exp__container">
        <div className="exp__container-contents exp__left">
          <h5 className='exp__container__header'>Frontend Development</h5>
          <div className="exp__container__items">
            <div className="exp__fade">
              <article className="exp__item">
                <AiOutlineCheckCircle className='exp__item-icon'/>
                <div className="exp__item-detail">
                  <h5>HTML</h5>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className="exp__item">
                <AiOutlineCheckCircle className='exp__item-icon'/>
                <div className="exp__item-detail">
                  <h5>Bootstrap</h5>
                  <small className='text-light'>Still To Learn</small>
                </div>
              </article>
              <article className="exp__item">
                <AiOutlineCheckCircle className='exp__item-icon'/>
                <div className="exp__item-detail">
                  <h5>Javascript</h5>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className="exp__item">
                <AiOutlineCheckCircle className='exp__item-icon'/>
                <div className="exp__item-detail">
                  <h5>CSS</h5>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className="exp__item">
                <AiOutlineCheckCircle className='exp__item-icon'/>
                <div className="exp__item-detail">
                  <h5>React</h5>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className="exp__item">
                <AiOutlineCheckCircle className='exp__item-icon'/>
                <div className="exp__item-detail">
                  <h5>Ui/Ux</h5>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="exp__container-contents exp__right">
          <h5 className='exp__container__header'>Backend Development</h5>
          <div className="exp__container__items">
            <div className="exp__fade">
                <article className="exp__item">
                <AiOutlineCheckCircle className='exp__item-icon'/>
                <div className="exp__item-detail">
                  <h5>MonogoDB</h5>
                  <small className='text-light'>Still To Learn</small>
                </div>
              </article>
              <article className="exp__item">
                <AiOutlineCheckCircle className='exp__item-icon'/>
                <div className="exp__item-detail">
                  <h5>MySQL</h5>
                  <small className='text-light'>Still To Learn</small>
                </div>
              </article>
              <article className="exp__item">
                <AiOutlineCheckCircle className='exp__item-icon'/>
                <div className="exp__item-detail">
                  <h5>NodeJs</h5>
                  <small className='text-light'>Still To Learn</small>
                </div>
              </article>
              <article className="exp__item">
                <AiOutlineCheckCircle className='exp__item-icon'/>
                <div className="exp__item-detail">
                  <h5>PHP</h5>
                  <small className='text-light'>Still To Learn</small>
                </div>
              </article>
              <article className="exp__item">
                <AiOutlineCheckCircle className='exp__item-icon'/>
                <div className="exp__item-detail">
                  <h5>Python</h5>
                  <small className='text-light'>Still To Learn</small>
                </div>
              </article>
            </div>
          </div>  
        </div>
        </div>
    </section>
  )
}

export default experiences