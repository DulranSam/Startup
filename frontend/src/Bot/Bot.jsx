/* eslint-disable no-unused-vars */
import { Suspense, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
import Axios from "axios"
// import { Gemini } from "./Services/Api";


const BotPage = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible,setVisible] = useState(false);
  const [response, setResponse] = useState([]);

  let promptCounter = 0;

  async function sendPrompt(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const promptResponse = await Axios.post("http://localhost:8000/gemini",data);
      if(promptResponse.status===200){
        setResponse(promptResponse.data);
        promptCounter++;
    }
    
    
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ margin: "5%" }}>
<button onClick={() => {
    setVisible(!visible);
}}>
    {visible ? "Close Bot" : "Open Bot!"}
</button>

     {
        visible?
        <div> <h1>Gemini</h1>   
        <input
          onChange={(e) => {
            setData(e.target.value);
          }}
          placeholder={promptCounter===0?"Ask Me Anything!":"Anything Else?"}
        />
        <h1 >{promptCounter===0?"Hi i'm Velo , How may I help you today? 🤖":""}</h1>
        <Suspense fallback={<RingLoader/>}> <p>{JSON.stringify(response.generatedText)}</p> </Suspense>
          {/**Getting rid of the \n */}
        <button onClick={sendPrompt}>Enter</button></div>:<div></div>
     }
    </div>
  );
};

export default BotPage;
