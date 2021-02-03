import React from 'react'

import {Link} from 'react-router-dom'
import './Getbutton.css'

function CustomButton() {
  return (
    <div>
      <Link to =''>
      <customButton className="outline-secondary btn">Secondary</customButton>{' '}
   </Link>
    </div>
  )
}

export default CustomButton
