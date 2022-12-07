import React from 'react'
import "./Contact.scss"
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import {TbMail} from 'react-icons/tb'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export const Contact = (props) => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yl1k64d', 'template_z44wopg', form.current, 'bHS_9VsiV3Xc2QO2y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

    function changeSize() {
        document.getElementById('app').style.gridTemplateColumns = '1fr 5fr'
        document.getElementById('app').style.gridTemplateRows = '1fr 5fr'
        
        document.getElementById('home_container').style.transform = "scale(0)"
        document.getElementById('logo_container').style.transform = "scale(0)"
        document.getElementById('logo_container2').style.transform = "scale(1)"
        
        document.getElementById('projects_container').style.transform = "scale(0)"
        document.getElementById('project_container').style.transform = "scale(0)"
        
        document.getElementById('contacts_container').style.transform = "scale(1)"
        document.getElementById('about_container').style.transform = "scale(0)"
        props.updateNav("contact")
       
    }
  return (
    <div className="contact" id='contact'>
      <div className="contacts_container" id='contacts_container'> 
       <h4>Let's Talk!</h4>
       <div className="contacts_all">
        <div className="contacts_left">
          
          
          
          
          <div className="contacts_desc"><p>Send me a message via</p></div>
            <div className="contacts_desc">
              <a href="http://m.me/1110109295" target="_blank">Messenger</a>
              <RiMessengerLine className='contact__icon'/>
            </div>
            <div className="contacts_desc">
              
              <a href="https://api.whatsapp.com/send&phone=+380661929331" target="_blank">WhatsApp</a>
              <BsWhatsapp className='contact__icon'/>
            </div>
            <div className="contacts_desc">
              <a href="mailto:tanya.shtykalo@gmail.com" target="_blank">Mail</a>
              <TbMail className='contact__icon'/>
              </div>
            </div>
        <div className="contacts_right">
          <div className="contacts_desc"><p>Or just fill this form)</p></div>
         
         <form ref = {form} onSubmit={sendEmail}>
         <input type="text" name='name' placeholder='Your Name' required/>
            <input type="email" name="mail" placeholder='Your email' required/>
            <textarea name="message" rows="8" required></textarea>
            <button type="submit" className='btn btn_primary' >Send a message</button>

         </form>
        </div>
        </div>
      </div>


        <div className="contact-btn-container">
            <div className={props.navBtn === "contact" ? 'main-button main-button-selected' : 'main-button' }>
                <p onClick={changeSize}>Contacts</p>
            </div>
        </div>
    </div>
    
  )
}
