/* eslint-disable react/prop-types */
import { useState } from "react";






const Books = ({key,data}) => {

  
const [favs,setFavs] = useState({

})

const myCollection = async()=>{
  const data = document.querySelector(".story").innerHTML
  if(data!==""){
    setFavs({...favs,data})
    console.log(`Saved data ${favs}`)
  }
  
}

  return (
    <div 
    key={key}>
      <h2 className="story">{data.message="Testing some shit!"}</h2> 
      <p>{data.title}</p>
    <button onClick={myCollection}>Save To My Collection</button>
    </div>
  )
}

export default Books