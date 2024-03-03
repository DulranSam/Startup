/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react"
import { Bookbag } from "../App"

const Books = ({ key, data }) => {
  const { favs, setFavs, loading, setLoading } = useContext(Bookbag)

  const myCollection = async () => {
    const data = document.querySelector(".story").innerHTML
    try {
      setLoading(true);
      if (data !== "") {
        setFavs({ ...favs, data })
        console.log(`Saved data ${favs}`)
      } else {
        setFavs({ data })
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return loading? "Loading..." : (
    <div className="card" key={key}>
      <div className="card-body">
        <h2 className="card-title">{data.message = "Testing some shit!"}</h2>
        <p className="card-text">{data.title}</p>
        <button onClick={myCollection} className="btn btn-primary">Save To My Collection</button>
      </div>
    </div>
  )
}

export default Books
