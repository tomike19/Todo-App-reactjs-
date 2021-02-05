import React from 'react'
import {Link} from 'react-router-dom'
import './homepage.css'
import todo from '../component/images/todoo.png'
import Navbar from './Navbar'


function Homepage() {
  return (
      <div className="homepage">
             <Navbar/>
            <img src={todo} alt="" className="home-img"/>
                <h1>MAKE MORE TIME FOR<br/> THE WORK THAT MATTERS MOST..</h1>
                      <Link className="get-started" to ='/login'>
                          Get Started 
                        </Link>
              </div> 
            
        
       
     
  )
  
  
}

export default Homepage
