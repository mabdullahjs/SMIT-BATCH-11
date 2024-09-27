import React, { useEffect } from 'react'

const Card = ({title , description}) => {
    useEffect(()=>{
        console.log("card component mounted");
        return ()=>{
            console.log("component unmounted");
        }
    } , [])
  return (
    <div style={{
        border: '2px solid black',
        padding: "20px",
        margin: '20px',
        borderRadius: '20px'
    }}>
    <h1>{title}</h1>
    <p>{description}</p>
    </div>
  )
}

export default Card