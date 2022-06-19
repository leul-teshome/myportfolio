import React,{useState, useRef} from 'react'
import './contact.css'
import {BsLinkedin, BsTwitter, BsFacebook, BsGithub} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Mainform=()=>{

    let Result=()=>{
        toast.success('Cheers!! Got your info, will contact you soon!', 
        {position: toast.POSITION.TOP_RIGHT})
      }
    
      const form = useRef();
    
      const Sendemail=(e)=>{
        e.preventDefault();
      
        emailjs.sendForm('service_xmch9ln', 'template_rtexzhv', form.current, 'yTp98MGWpVO1qqXnx')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return(
        <form ref={form} onSubmit={Sendemail} >
        <input 
        type="text" 
        name='name'
        placeholder='Name'
        />
        <input 
        type="email" 
        placeholder='Email'
        name='email'
        />
        <input 
        type="tel" 
        placeholder='Phone'
        name='phone'
        />
       <textarea 
       className='input'
       placeholder='Message'
       name="message" 
       id="message" 
       cols="30" 
       rows="10">
       </textarea>
       <button onClick={Result} className='formbtn'>Let's Go</button>
       <ToastContainer theme="dark" />
       <div
      className="blur c-blur1"
      style={{ background: "#1e7d8c" }}
    ></div>
    </form>
    )
}


const Contact = () => {

    const form = useRef();

    const Sendemail=(e)=>{
      e.preventDefault();
    
      emailjs.sendForm('service_xmch9ln', 'template_rtexzhv', form.current, 'yTp98MGWpVO1qqXnx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

  return (
    <div className='form_containers' id='contact'>
        <div className='left_wrapper'>
            <div className='socialcontainer'>
            <h1>
               Say <span style={{color:'black'}}>Hi</span> 
            </h1>
            <div className='social'>
                <a href="https://www.linkedin.com/in/luel-teshome-3a0732219?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNnqSIaxoT9%2BHcZzOUy6EWA%3D%3D" target='_blank'>{<BsLinkedin />}</a>
                <a href="https://twitter.com/luell_T?t=ks3md30apgfw-76tJzTMXA&s=09" target='_blank'>{<BsTwitter />}</a>
                <a href="https://github.com/leul-teshome" target='_blank'>{<BsGithub />}</a>
                <a href="https://www.facebook.com/profile.php?id=100081940038847" target='_blank'>{<BsFacebook />}</a>
                <a href="mailto: luelteshome92@gmail.com">{<MdEmail />}</a>
            </div>
            <p>
                Contact me if  you need fast and SEO optimized website for your growing business i will replu as soon as i get your info
            </p>
            </div>
        </div>
        <div className='right_wrapper'>
            <div className='form_wrapper'>
                {<Mainform />}
            </div>
        </div>
    </div>
  )
}

export default Contact