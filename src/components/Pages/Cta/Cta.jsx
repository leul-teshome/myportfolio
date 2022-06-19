import React from 'react'
import './cta.css'

const Cta = () => {
  return (
    <div className='cta_container' id=''>
        <div className='cta_wrapper'>
            <p className='cta_para'>Get the best out of your business, Register Now to Learn More and Get A quote!</p>
            <a href="/contact"><button className='cta_link'>Get Quote</button></a>
        </div>
    </div>
  )
}

export default Cta