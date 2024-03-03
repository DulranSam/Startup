/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Tasks from './Components/Tasks/Tasks'
import NotFound from './Components/Exceptional/NotFound'

export const theBag = createContext()

function App() {

  const BASE = "http://localhost:8000/tasks"
  const [data,setData]  = useState([])
  const [tasks,setTasks] = useState([]);
  const [loading,setLoading]  = useState(false);
  const [user,setUser] = useState({username:"",password:""})

  const theItems = {
    data,setData,tasks,setTasks,loading,setLoading,BASE,user,setUser
  }


  return (
    <>  
    <BrowserRouter>
    <theBag.Provider value={theItems}>
    <Routes>
    <Route path="/" element={<Tasks />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </theBag.Provider>
  </BrowserRouter>
      
    </>
  )
}

export default App
