import React, { useEffect } from 'react'

function CustomBtn({title , color}) {
    useEffect(()=>{
        console.log("component mounted")

        return ()=>{
          console.log("component unmount")
        }
    } , [])
  return (
    <button style={{
        backgroundColor: color,
        color: "black",
        padding: "10px 15px",
        borderRadius: "20px"
    }}>{title}</button>
  )
}

export default CustomBtn