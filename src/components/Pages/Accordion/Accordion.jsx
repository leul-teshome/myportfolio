import React,{useState} from 'react'
import './accordion.css'
import { Data } from './Data'
import {FaLockOpen} from 'react-icons/fa'
import {HiLockClosed} from 'react-icons/hi'

const Accordion = () => {

    const [open, setOpen]=useState(-1)

    const toggleaccordion=(index)=>{
  
         if (index === open) {
            setOpen(-1)
            return
         }

        setOpen(index)
    }

  return (
    <>
     <div className='acc_container' id='faq'>
        <div className='all_titles'>
            <span className='acc_title'>Most Asked Questions</span>
            <h1>Below are Answers to some of your questions.</h1>
        </div>
        <div className='accordion_wrapper'>
            {Data.map((faqs, index)=>{

                return(
                    <div key={index} onClick={()=> toggleaccordion(index)} >
                    <div className='acc_question'>
                    <h4 className={open === index ? "active" : ""} >{faqs.questions}</h4>
                    </div>
                    <div>
                        {open === index ? (

                        <> <span className='close'>
                            
                            {<FaLockOpen />}
                        
                        </span>

                        </>

                        ) : (

                        <>
                        <span className='close'>
                            
                            {<HiLockClosed />}
                            
                            </span>
                        </>

                        )}

                    </div>
                    <div className='acc_answer'>
                        <p style={{color:'#00ff00;', fontWeight:'500', textAlign:'center'}} className={open === index ? "acrive" : "inactive"} >{faqs.answer}</p>
                    </div>
                </div>
                )
            })}
        </div>
     </div>
    </>
  )
}

export default Accordion