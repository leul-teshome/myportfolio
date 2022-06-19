import React from 'react'
import {Cards} from '../../Cards/Cards'
import './projects.css'
const Projects = () => {
  return (
    <div className='portfolio' id='portfolio'>
        <div className='texts'>
        <h4 className='latest'>Latest Works</h4>
        <h2 className='main_title'>Portfolio</h2>
        </div>
        <div className='card_container'>
            {Cards.map((items)=>{
                return(
                    <div className='cards'>
                    <div>
                        <img src={items.image} alt="image" />
                    </div>
                   <div className='inner_texts'>
                   <h3>{items.title}</h3>
                    <a href={items.Link} target='_blank'>See Live</a>
                   </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Projects