import React from 'react'
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
import Contact from './components/Pages/contact/Contact';
import Projects from './components/Pages/projects/Projects';
import Cta from './components/Pages/Cta/Cta';
import Resume from './components/Pages/resume/Resume';
import Accordion from './components/Pages/Accordion/Accordion';
import Testimonial from './components/Pages/Testimonial/Testimonial';

const MainRoutes = () => {
  return (
    <>
    <Home />
    <Resume />
    <About />
    <Projects />
    <Cta />
    <Testimonial />
    <Accordion />
    <Contact />
    </>
  )
}

export default MainRoutes