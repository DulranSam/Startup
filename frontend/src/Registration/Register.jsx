import React, { useState } from 'react'
import Axios from "axios";
import { Link } from 'react-router-dom';

const Register = () => {

    const [loading,setLoading] = useState(false)
    const [user,setUser] = useState({username:"",password:""})

    async function userRegister(e){
        e.preventDefault();
        try{
            setLoading(true);
            const data = await Axios.post("http://localhost:8000/user/Register",user)
            if(data.status===200){
                alert(`${user.username} has logged in!`)
            }
        }catch(err){
            console.error(err);
        }finally{
            setLoading(false);
        }
    }

    const handleChange = async(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

  return (
    <div><h1>Register!</h1><form onSubmit={userRegister}><input onChange={handleChange} name='username' placeholder='Enter username...'></input><input onChange={handleChange} name='username' placeholder='Enter username...' type='password'></input><button type='submit' disabled={loading}>Register!</button></form><Link to="/login">Go back to Login</Link><br/><Link to="/">Go Home!</Link></div>
  )
}

export default Register