import React from 'react'
import './About.css'
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import pdf from './images/pavithra.pdf'
const About = () => {
  return (
    <>
      <div className='container-fluid aboutcontainer'>
        <div className='row aboutrow'>
           <div className='col-lg-6 col-sm-12'>
            <h1>About Me!</h1>
            <p>
              Hello! I'm <strong>Pavithra R</strong>, a passionate front-end developer with a strong foundation in HTML, CSS, JavaScript,React and Bootstrap.
        I enjoy crafting responsive, user-friendly interfaces and continuously learning modern web technologies.
      </p>
      <h2>Technologies I Use</h2>
      <ul>
        <li>HTML5, CSS3, JavaScript</li>
        <li>Bootstrap, React JS</li>
        <li>Git, GitHub</li>
      </ul>
      <a href={pdf} download='Pavithra_Resume.pdf'style={{textDecoration:"none",margin:'10px'}}>
        <button className='btn btn-success d-flex justify-content-center align-items-center m-1 p-2'>RESUME <FaRegArrowAltCircleDown size={30}/></button>
      </a>
           </div>
           <div className='col-lg-6 col-sm-12'>
            <h2>Education</h2>
      <p>B.E. in Electronics and Communication Engineering – Anna University (2018)</p>

      <h2>My Goal</h2>
      <p>
        I'm eager to join a team where I can contribute my skills and grow as a developer by building impactful digital experiences.
      </p>
      
           </div>
        </div>
         
      </div>
    </>
  )
}

export default About
