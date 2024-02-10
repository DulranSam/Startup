import { Link } from 'react-router-dom'

const Exception = () => {
  return (
    <div><h1>Please <Link to="/login">Login</Link> to Continue!</h1></div>
  )
}

export default Exception