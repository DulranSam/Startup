import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div><h1>This is an unknown Path</h1><br/><Link to="/">Click here to go back Home!</Link></div>
  )
}

export default NotFound