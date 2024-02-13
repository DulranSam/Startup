
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div><ul><li><Link to="/">Home!</Link></li></ul><ul><li><Link to="/login">Click Here to Login!</Link></li></ul>
    <ul><li><Link to="/register">Click Here to register!</Link></li></ul></div>
  )
}

export default Navbar