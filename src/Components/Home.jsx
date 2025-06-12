import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <>
      <div className='container-fluid homecontainer'>

        <div className='row'>
           <div className='col-lg-7 col-sm-12'>
            <div className='content'>
              <h1>Hello,i'm <span>Pavithra,</span></h1>
             <h2>Frontend Developer</h2>
             <p>I build responsive and user-friendly websites using HTML, CSS, Bootstrap,JavaScript & React.</p>
            </div>
             
           </div>
           <div className='col-lg-5 col-sm-12'>
             <img src="/pavithraph.png"className='portImg'/>
           </div>
           
        </div>
         
      </div>
    </>
  )
}

export default Home
