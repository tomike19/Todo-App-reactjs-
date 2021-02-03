import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Getbutton.css'

function CustomButton() {
  return (
    <div>
      <Link to =''>
      <Button variant="outline-secondary">Secondary</Button>{' '}
   </Link>
    </div>
  )
}

export default CustomButton
