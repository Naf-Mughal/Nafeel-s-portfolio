import React from 'react'
import './contact.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
  const form = useRef();
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState("");
  const onInput = (e) => setState(e.target.value)
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_bhe9bsg', 'template_ms1os8o', form.current, 'hpwu2p6HE55CWf60O')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact ME</h2>
      <div className="container contact__container">
        <div className="contact-js">
          <form ref={form} onSubmit={sendEmail}>
            <input onInput={onInput} type="text" name='name' id='name' placeholder='Enter Your Name'/>
            <input onInput={onInput} type="email" name="email" id="email"  placeholder='Enter Your Email'/>
            <textarea onInput={onInput} name="message" id="message"  placeholder='Enter Your Message' rows={8} />
            <input type="submit" value="Submit" className='contact-btn' />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact