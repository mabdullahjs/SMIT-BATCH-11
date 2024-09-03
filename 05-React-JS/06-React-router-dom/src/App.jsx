// import React, { useState } from 'react'

// function App() {
//   // const [username , setUsername] = useState("Abdullah");
//   // let username = "Abdullah";

//   // const [counter , setCounter] = useState(0);

//   function addCounter (){
//     // username = "usman"
//     // setUsername("Usman")
//     // setCounter(counter + 1);
//     // setCounter(counter + 1);
//     // setCounter(counter + 1);
//     // setCounter(counter + 1);
//     // setCounter(counter + 1);

//     // setCounter(prevVal => prevVal + 1);
//     // setCounter(prevVal => prevVal + 1);
//     // setCounter(prevVal => prevVal + 1);
//     // setCounter(prevVal => prevVal + 1);
//   }

//   return (
//     <>
//       <h1>Hello {counter}</h1>
//       <button onClick={addCounter}>add Counter</button>
//     </>
//   )
// }

// export default App


















// import React from 'react'
// import Card from './components/Card'

// const App = () => {
//   return (
//     <>
//     <h1>Hello</h1>
//     <Card title="mehran Boss 1990" description="best car in the world" price="1500000"/>
//     <Card title="carry dabba 1996" description="best loader in the world" price="2000000"/>
//     </>
//   )
// }

// export default App



// parent to children
// chidren to parent


import React, { useEffect, useState } from 'react'
import User from './components/User'

const App = () => {
  const [userAge, setUserAge] = useState(0)
  const [username, setUsername] = useState("abdullah")
  const [userComp, setUserComp] = useState(false)

  useEffect(() => {
    console.log("App component mounted")
  } , [userAge])


  function getData(age) {
    console.log("get data from children component")
    console.log(age);
    setUserAge(age)
  }

  return (
    <>
      <h1>Hello {userAge} </h1>
      {userComp ? <User username={username} func={getData} /> : null}
      <button onClick={() => setUserComp(!userComp)}> user component</button>
      <button onClick={() => setUsername("usman")}> username</button>
      <button onClick={() => setUserAge(userAge + 1)}>change Age</button>
    </>
  )
}

export default App

