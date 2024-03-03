/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import { Bookbag } from "../App"
import Axios from "axios";

const Today = () => {

    const {loading,setLoading,user} = useContext(Bookbag)
    const [feeling,setFeeling] = useState("")
    const date = new Date();

    const Endpoint = "http://localhost:8000/home"

    async function howImFeeling(e){
        e.preventDefault();
        try{
            setLoading(true);
            const {data} = await Axios.post(`${Endpoint}/personal`,{feeling})
            if(data.status===201){
                alert("Added task!")
                getRecords(); // Update records after adding new feeling
            }
        }catch(err){
            console.error(err);
        }finally{
            setLoading(false);
        }
    }

    const [history,setHistory] = useState([])
    
    async function getRecords(){
        try{
            const {data} = await Axios.get(Endpoint);
            setHistory(prevHistory => [...prevHistory, data]); // Spread previous history state and then add new data
        }catch(err){
            console.error(err);
        }
    }
    
    useEffect(()=>{
        getRecords();
    }, [history]) // Add history as a dependency

    return (
        <div>
            <h1>How are you feeling Today? 😇</h1>
            <form onSubmit={howImFeeling}>
                <input onChange={(e)=>{setFeeling(e.target.value)}} placeholder="Let us know!"></input>
                <button type="submit" disabled={loading}>Okay!</button>
            </form>
            <br/>
            <p>{JSON.stringify(history)}</p>
        </div>
    )
}

export default Today
