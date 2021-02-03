import React from 'react'
import {Link} from 'react-router-dom'
import './homepage.css'
import Navbar from './Navbar'




function Homepage() {
  return (
      <div className="todo">
    <Navbar/>
           <div>
          <span className='text'> <h1>Less complaint,more time for you.</h1></span>
          <Link to ='/login'>
   <button className="btn">
     Get Started
   </button>
   </Link>
            </div>
            </div>
     
  )
  
  
}

export default Homepage
