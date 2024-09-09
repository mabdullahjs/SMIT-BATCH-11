import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [data , setData] = useState(null);

  // usenavigate
  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((res) => {
        console.log(res)
        setData(res)
      }).catch((err) => {
        console.log(err);

      })
  }, [])

  const singleUser = (item) =>{
    navigate(`singlestudent/${item.id}`)
  }
  return (
    <>
    <h1 className='text-center'>Hello students</h1>
    {
      data ? data.map((item)=>{
        return <div key={item.id} style={{
          border: "1px solid black",
          margin: "20px",
          padding: "20px"
        }}>
          <h3>{item.name}</h3>
          <p>{item.username}</p>
          <button onClick={()=> singleUser(item)}>show more</button>
        </div>
      }): <h1>Loading..</h1>
    }
    </>
  )
}

export default Home