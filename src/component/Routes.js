import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Homepage from './homepage'
import Login from './login';
import Signup from './signup';

function Routes() {
  return (
    <Switch>
      <Route path ="/" exact component={Homepage}/>
      <Route path ="/Login"  component={Login}/>
      <Route path ="/Signup"  component={Signup}/>
    </Switch>
  )
}

export default Routes
