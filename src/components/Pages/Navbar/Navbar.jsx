import React, {useState} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import {MdOutlineSort} from 'react-icons/md'
import { Links } from './Links'
import './navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    };
    return (
      <nav className="nav">
        <a href="/"><h1 style={{cursor:'pointer'}} className="nav__brand">
          Leul
        </h1></a>
        <ul className={active}>
          <li className="nav__item">
            <Link to='/' className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to='/about' className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link to='/portfolio' className="nav__link">
              Portfolio
            </Link>
          </li>
          <li className="nav__item">
            <Link to='/testimonial' className="nav__link">
              Testimonial
            </Link>
          </li>
          <li className="nav__item">
            <Link to='/faq' className="nav__link">
              FAQ
            </Link>
          </li>
          <li className="nav__item">
            <Link to='/contact' className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div style={{background:'#ed0c329a', height:'2.5px'}} className="line1"></div>
          <div style={{background:'#ed0c329a', height:'2.5px'}} className="line2"></div>
          <div style={{background:'#ed0c329a', height:'2.5px'}} className="line3"></div>
        </div>

        <a href="tel: +251935581958"><button className='navbtn'>Call Me</button></a>
      </nav>
    );
}

export default Navbar