import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter,Switch,Route} from 'react-router-dom'; 
import Signup from './signup';
import Login from './login';
import './homepage.css'




function homepage() {
  return (
      <BrowserRouter>
      <Navbar/>
      <div className="todo">
          <span className='text'> <h1>Less complaint,more time for you.</h1></span>
          <span><button className='button'>Get Started</button></span>
            <span className="dot"></span>
            
            
            
</div>
      <Switch>
        <Route path='/sign-up' exact component ={Signup}/>
        <Route path='/login' exact component ={Login}/>
      </Switch>
      </BrowserRouter>
      
     
  )
  
  
}

export default homepage
