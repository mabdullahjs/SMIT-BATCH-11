import React, { useEffect } from 'react'

const User = ({username , func}) => {
    const age = 21
    useEffect(()=>{
        console.log("component mount")

        return ()=>{
            console.log("component unmount")
        }
    } , [])
    // dependency array
  return (
    <>
    <h1>Hello {username}</h1>
    <button onClick={()=> func(age)}>click</button>
    </>
  )
}

export default User