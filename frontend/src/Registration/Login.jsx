import React, { useState } from 'react'
import Axios from "axios";
import { Link } from 'react-router-dom';

const Login = () => {

    const [loading,setLoading] = useState(false)
    const [user,setUser] = useState({username:"",password:""})

    async function userLogin(e){
        e.preventDefault();
        try{
            setLoading(true);
            const data = await Axios.post("http://localhost:8000/user/login",user)
            if(data.status===200){
                alert(`${user.username} has logged in!`)
            }else{
                alert("BIG ISSUE HERE LOL!")
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
    <div><h1>Login!</h1><form onSubmit={userLogin}><input onChange={handleChange} name='username' placeholder='Enter username...'></input><input onChange={handleChange} name='username' placeholder='Enter username...' type='password'></input><button type='submit' disabled={loading}>Login!</button></form><br/><Link to="/register">Not an user yet ? Click Here to Register!</Link></div>
  )
}

export default Login