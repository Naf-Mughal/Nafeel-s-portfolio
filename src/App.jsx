import React from 'react'
import About from './components/About/about'
import Contact from './components/Contact/contact'
import Experiences from './components/Experiences/experiences'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import Navbar from './components/Navbar/navbar'
import Portfolio from './components/Portfolio/portfolio'
import Services from './components/Services/services'
import Testimonials from './components/Testimonials/testimonials'
const App = () => {
  return (
<>
    <Header />
    <Navbar />
    <About />
    <Experiences />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
</>
  )
}

export default App;