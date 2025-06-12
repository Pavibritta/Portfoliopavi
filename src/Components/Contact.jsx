import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
const Contact = () => {
  const form=useRef()
    const sendEmail=(e)=>{
  e.preventDefault()
  emailjs.sendForm(
    'pavi@1997',
    'template_oe5738a',
    form.current,
    "BAUP3PqAgE3BKSvyB"
  ).then((result)=>{
    Swal.fire({
  title: "successfully sent message!",
  text: "You clicked the button!",
  icon: "success"
});
  },(error)=>{
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
});
  })
  e.target.reset()
    }

  return (
    <>
      <div className='container-fluid contactcontainer'>
        <form  className='contactForm' ref={form} onSubmit={(e)=>sendEmail(e)}>
           <h2>Contact Us</h2>
           <div className='input-feild'>
            <input type="text" placeholder='Enter Your Name'name='name'required/>
           </div>
           <div className='input-feild'>
            <input type="text" placeholder='Enter Your Email'name='email'required/>
           </div>
           <div className='input-message'>
            <textarea placeholder='Enter Your Message' rows={5} name='message'required></textarea>
           </div>
           <div className='input-feild'>
            <button className='btn btn-success'type='submit'>Submit</button>
           </div>
           
        </form>
      </div>
    </>
  )
}

export default Contact
