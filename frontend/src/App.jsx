import { createContext, useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Home from './Home/Home';
import NotFound from './Exceptions/404';
import Login from './Registration/Login';
import Register from './Registration/Register';
import Navbar from "./Misc/Navbar"

export const Bookbag = createContext();

function App() {
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState([])

  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Bookbag.Provider value={(loading,setLoading,data,setData)}>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    </Bookbag.Provider> 
    
    </BrowserRouter>
    </>
  )
}

export default App
