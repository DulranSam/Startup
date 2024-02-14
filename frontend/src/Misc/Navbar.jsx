/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div ><ul style={{listStyle:"none",display:"inline-flex",justifyContent:"space-around 20px"}}><li >Home</li><br/><li>Login</li><br/><li>Register</li></ul>{/**<Link to="/">Home</Link><Link to="/login">Login</Link><Link to="/register">Register</Link> */}</div>
    
  )
}


export default Navbar