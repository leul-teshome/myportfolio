import React from 'react'
import cv from './cv.pdf'
import './resume.css'
import {BiDownload} from 'react-icons/bi'

const Resume = () => {
  return (
    <div className='cta_container'>
    <div className='cta_wrapper'>
        <a href={cv} download><button className='cta_link'>Download Cv</button></a>
        <i>{<BiDownload/>}</i>
    </div>
</div>
  )
}

export default Resume