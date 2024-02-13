/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Home";
import UnknownPage from "./Components/Unknown";
import { createContext, useState } from "react";
import Login from "./Components/Login";
import Navbar from "./Components/Misc/Navbar";
import Register from "./Components/Register";


// interface data {
//   user:string,
//   loading:boolean,
  
// }

// eslint-disable-next-line react-refresh/only-export-components
export const userData = createContext<any>();

function App() {
  const [user, setUser] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const  [logged,setLogged] = useState<boolean>(true);



  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <userData.Provider value={(user, setUser, setLoading, loading,logged,setLogged)}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="*" element={<UnknownPage />}></Route>
          </Routes>
        </userData.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
