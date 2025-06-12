import React, { useEffect, useRef, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { MdOutlineMenu } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import './Navbar.css'
const Navbar = () => {
  const [toggle,setToggle]=useState(true)
  const sideBar=useRef()
 const handleOpen=()=>{
   sideBar.current.classList.toggle('show')
   setToggle(false)
 }
 const handleClose=()=>{
  sideBar.current.classList.toggle('show')
   setToggle(true)
 }
 useEffect(()=>{
  const handleResize=()=>{
    if(window.innerWidth<=700){
      setToggle(true)
      sideBar.current.classList.remove('show')
    }
  }
   window.addEventListener('resize',handleResize)
    return ()=>window.removeEventListener('resize',handleResize)
 },[])
  return (
    <>
      <div className='container-fluid navbarcontainer'>
        <img src="/logo.png" alt="logo" style={{display:"none"}} className='logoimg'/>
        <div className='navbar'>
          <img src="/logo.png" alt="logo"/>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
          </ul>
        </div>
        {toggle?<MdOutlineMenu color='blue'className='menu'onClick={handleOpen}/>:<AiFillCloseCircle color='blue' className='close' onClick={handleClose}/>
        }
          
      </div>
      <div>
        <div className='sidebar' ref={sideBar}>
          <ul>
            <li><Link to='/' onClick={handleClose}>Home</Link></li>
            <li><Link to='/about'onClick={handleClose}>About</Link></li>
            <li><Link to='/contact'onClick={handleClose}>Contact</Link></li>
            <li><Link to='/projects'onClick={handleClose}>Projects</Link></li>
          </ul>
          </div>
      </div>
    </>
  )
}

export default Navbar
