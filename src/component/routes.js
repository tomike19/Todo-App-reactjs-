import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Signup from './signup'
import Login from './login'




const BaseRouter = () =>{
return(
  <Switch>
<Route exact path= "/Signup" component={Signup}/>
<Route exact path= "/Login" component={Login}/>
  </Switch>
)
}

export default BaseRouter