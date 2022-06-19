import React from 'react'
import image1 from '../../../Assets/image1.jpg'
import './home.css'

const Home = () => {
  return (
    <div className='home_container' id='/'>
        <div className='line'></div>
        <div className='home_left'>
            <div className='home_para'>
                <h1>
                   <span>Leul</span> here, <br />
                    Web Developer <br />
                    For Spiderman.
                </h1>
            </div>
        </div>
        <div className='home_right'>
            <div className='home_image'>
                <img src={image1} alt="image" />
            </div>
        </div>
    </div>
  )
}

export default Home