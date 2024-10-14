import React from 'react'

const Users = async  (props) => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}`);
  const response = await data.json()
  console.log(response)
    
  return (
    <>
    <h1>Users {props.params.id}</h1>
    <div>
      <h1>Name: {response.name}</h1>
      <h1>Email: {response.email}</h1>
      <h1>website: {response.website}</h1>
    </div>

    </>
  )
}

export default Users