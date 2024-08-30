// import React, { useState } from 'react'
// import CustomBtn from './components/CustomBtn'

// function App() {
//   const [showBtn , setShowBtn] = useState(true);
//   const [btnValue , setBtnValue] = useState("hello")


//   const updateValue = ()=>{
//     const value = prompt("enter updated value");
//     setBtnValue(value)
//   }
//   return (
//     <>
//     <h1>Hello</h1>
//     <button onClick={()=> setShowBtn(!showBtn)}>btn</button>
//     <button onClick={updateValue}>update btn</button>
//     {showBtn ? <CustomBtn title={btnValue} color="orange"/> : null}
//     </>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'

// function App() {
//   const [add, setAdd] = useState(0);
//   const [subtract, setSubtract] = useState(100);

//   useEffect(()=>{
//     console.log("component mount")
//   } , [])

//   // function addCounter (){
//   //   setAdd(add + 1)
//   // }

//   // function lessCounter (){
//   //   setSubtract(subtract - 1);
//   // }
//   return (
//     <>
//       <h1>Hello counter</h1>
//       {/* <button onClick={addCounter}>Add {add}</button>  <br />
//       <button onClick={lessCounter}>Subtract {subtract}</button> */}
//     </>
//   )
// }

// export default App








import axios from 'axios'
import React, { Suspense, useEffect, useState } from 'react'

//falsy values in javascript
// 0
// ""
// null
// undefined
// false
// NaN
// NaN

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const res = await axios("https://jsonplaceholder.typicode.com/users")
      console.log(res.data)
      setData(res.data);

    }
    getData()
  }, [])

  // fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(json => {
  //       console.log(json);
  //       // setData(json)
  //     })
  
  return (
    <>
    <h1>Hello world!</h1>
      {data ? data.map((item) => {
        return <div key={item.id}>
          <p>{item.name}</p>
        </div>
      }) : <h1>Loading...</h1>}
    </>
  )
}

export default App