import React from "react";
import './App.css'
import {BrowserRouter,Switch,Route} from 'react-router-dom'; 
import Signup from './component/signup';
import Login from './component/login';
import Homepage from "./component/homepage";


function App() {
  return (
    <div className="App">
   <BrowserRouter>
      <Homepage/>
      <Switch>
        <Route path='/sign-up' exact component ={Signup}/>
        <Route path='/login' exact component ={Login}/>
      </Switch>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
