import React, { useState } from 'react'
import './projects.css'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

import pic1 from './images/digi.jpeg'
import pic2 from './images/pali.jpeg'
import pic3 from './images/login.jpeg'
import pic4 from './images/signin.jpeg'
const Projects = () => {
  const projectsData=[{
    id:1,
    title:"DIGITAL CLOCK",
    imgurl:pic1,
    description:'A simple digital clock created using Html,Css,Javascript',
    demolink:'/digital clock/demo.html'
  },{
    id:2,
    title:"PALINDROME CHECK",
    imgurl:pic2,
    description:'A simple Palindrome Checker Projet created using Html,Css,Javascript',
    demolink:'/sign in/demo.html'
  },{
    id:3,
    title:"LOGIN",
    imgurl:pic3,
    description:'A simple Login Page created using Html,Css,Javascript',
    demolink:'/sign in/login.html'
  },{id:4,
    title:"SIGNIN",
    imgurl:pic4,
    description:'A simple SignUp Page created using Html,Css,Javascript',
    demolink:'/sign in/Sign.html'
  }
]
  return (
    <>
      <div className='container-fluid projectcontainer'>
        <h1>My Projects</h1> 
        <div className='row'>
         {
          projectsData.map((data)=>{
            return <div className='col-12 col-lg-3 col-md-4 col-sm-6 mb-1' key={data.id}>
              <Card style={{ width: '18rem',display:'flex',justifyContent:'center',alignItems:'center',margin:'10px',height:'400px',boxShadow:'5px 5px 5px rgba(0,0,0,0.1)'}}>
      <Card.Img variant="top" src={data.imgurl} style={{width:'50%',margin:'10px',height:'40%'}}/>
      <Card.Body>
        <Card.Title style={{textAlign:'center',color:'grey'}}>{data.title}</Card.Title>
        <Card.Text style={{color:'rgb(14, 184, 127)',textAlign:'center'}}>
          {data.description}
        </Card.Text>
        <center>
          <a href={data.demolink}>
          <Button variant="primary">Click to see</Button>
        </a>
        </center>
        
      </Card.Body>
    </Card>
            </div>
          })
         }
             </div> 
       </div>
    </>
  )
}

export default Projects
