import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer_container'>
        
        <div className='footer_middle'>
            <input type="text" placeholder='someone@gmail.comS' />
           <a className='sub_link' href="#"><button>Subscribe</button></a>
        </div>

        <div className='footer_links'>
                <a className='f_links' href="#">Home</a>
                <a className='f_links' href="#">Aout</a>
                <a className='f_links' href="#">Contact</a>
                <a className='f_links' href="#">Portfolio</a>
            </div>

        <div className='footer_right'>
            <p>All RIGHT RESERVED © {new Date().getFullYear()}</p>
        </div>
    </div>
  )
}

export default Footer