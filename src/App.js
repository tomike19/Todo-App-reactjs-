import React from "react";
import './App.css'
import Homepage from './component/homepage'
import Navbar from './component/Navbar'
import {BrowserRouter,Switch,Route} from 'react-router-dom'; 
import Signup from './component/signup';
import Login from './component/login';


function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path='/sign-up' exact component ={Signup}/>
        <Route path='/login' exact component ={Login}/>
      </Switch>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
