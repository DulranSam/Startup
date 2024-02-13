/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {  useState} from "react";
import { LineWave } from "react-loader-spinner";
// import {userData} from "../App"
import Axios from "axios";
import Exception from "./Exception/Exception";



const HomePage = () => {
  // const {loading,setLoading} = useContext<any>(userData);
  const  [logged,setLogged] = useState<boolean>(true); //we need to change implementation here!

  let searchCounter = 0;

  const baseURL = "http://localhost:8000/home";
  const [story,setStory] = useState("")
  const [data, setData] = useState<string[]>([]);
  const [loading,setLoading] = useState<boolean>(false)

  async function fetchData(e:Event){
    e.preventDefault();
    try{
      setLoading(true);
      const response = await Axios.post(baseURL,story)
      if(response.status===200){
        setData(response.data)
        alert("Generated!")
        searchCounter++;
      }else if(response.status===400){
        alert("Couldn't Generate Book!")
      }else{
        alert("Server Failure!")
      }
    }catch(err){
      console.error(err);
    }finally{
      setLoading(false);
    }
  }



  return logged? loading ? (
    <LineWave />
  ) : (
    <div>
      <h1>Welcome to Books Diary 📚</h1>
      <form onSubmit={fetchData}><input onChange={(e)=>setStory(e.target.value)} placeholder="Generate your story!" type="text" required></input><button type="submit" disabled={loading}>{loading?"Loading...":"Generate book!"}</button></form>
      {data && data.length ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <h1>{searchCounter === 0 ?"Generate your free e-book now!" : "No results found , please try again!"}</h1>
      )}
    
      {/**Validation Issue here! */}
    </div>
  ) : <Exception/>
};

export default HomePage;
