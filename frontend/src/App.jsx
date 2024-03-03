/* eslint-disable no-unused-vars */
import { createContext, useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Home from './Home/Home';
import NotFound from './Exceptions/404';
import Login from './Registration/Login';
import Register from './Registration/Register';
import Navbar from "./Misc/Navbar"
import BotPage from './Bot/Bot';
import Today from './Wellbeing/Today';

export const Bookbag = createContext();

function App() {
  const [loading,setLoading] = useState(false)
  const [logged,setLogged] = useState(true);
  const [data,setData] = useState({});
  const [user,setUser] = useState({username:"guest",password:""})
  const [favs,setFavs] = useState({
    
  })

  const Bag ={
    loading,setLoading,data,setData,favs,setFavs,logged,setLogged,user,setUser
  }


  return (
    <>
    <BotPage/>
    <Navbar/>
    <BrowserRouter>
    <Bookbag.Provider value={Bag}>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='feeling' element={<Today/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </Bookbag.Provider> 
    
    </BrowserRouter>
    </>
  )
}

export default App
