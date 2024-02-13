import React from 'react'

const Books = ({key,data}) => {
  return (
    <div key={key}><h2>{data.message}</h2></div>
  )
}

export default Books