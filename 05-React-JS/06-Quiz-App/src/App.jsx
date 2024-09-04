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


// import React, { useEffect, useState } from 'react'
// import User from './components/User'

// const App = () => {
//   const [userAge, setUserAge] = useState(0)
//   const [username, setUsername] = useState("abdullah")
//   const [userComp, setUserComp] = useState(false)

//   useEffect(() => {
//     console.log("App component mounted")
//   } , [userAge])


//   function getData(age) {
//     console.log("get data from children component")
//     console.log(age);
//     setUserAge(age)
//   }

//   return (
//     <>
//       <h1>Hello {userAge} </h1>
//       {userComp ? <User username={username} func={getData} /> : null}
//       <button onClick={() => setUserComp(!userComp)}> user component</button>
//       <button onClick={() => setUsername("usman")}> username</button>
//       <button onClick={() => setUserAge(userAge + 1)}>change Age</button>
//     </>
//   )
// }

// export default App
















// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

// function App() {
//   const [counter, setCounter] = useState(0)
//   const [data , setData] = useState(null);
//   useEffect(() => {
//     // fetch('https://jsonplaceholder.typicode.com/users')
//     //   .then(response => response.json())
//     //   .then(json => {
//     //     console.log(json)
//     //   })
//     //   .catch(err => console.log(err))

//     async function getData (){
//       const response = await fetch('https://jsonplaceholder.typicode.com/users')
//       const res = await response.json();
//       setData(res)

//       console.log(res)
//     }

//     getData()


//   }, [])


//   return (
//     <>
//       <h1>Hello world! {counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>add {counter}</button>
//       {data ? data.map((item)=>{
//         return <div key={item.id}>
//           <h1>Name: {item.name}</h1>
//           <h1>Email: {item.email}</h1>
//           <hr />
//         </div>
//       }): <h1>Loading...</h1>}
//     </>
//   )
// }

// export default App







import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [question, setQuestion] = useState([]);
  const [questionState , setQuestionState] = useState(0)

  const checkedInput = useRef([]);
  useEffect(() => {
    axios("https://the-trivia-api.com/v2/questions")
      .then((res) => {
        console.log(res.data)
        setQuestion(res.data);
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  //shuffle array

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }
    
    return array;
  }

  function nextQuestion (index){
    const checkedButton = checkedInput.current.find(input => input.checked);
    if (checkedButton) {
      const selectedValue = checkedButton.value;
      console.log("Selected answer:", selectedValue);

    }


    questionState < question.length - 1 ? setQuestionState(questionState + 1) : alert("question khtm hogaye maalik")

  }

  return (
    <>
      <h1>Quiz App</h1>
      {question.length > 0 ? <div>
        <h1>Q{questionState + 1}: {question[questionState].question.text}</h1>
        <ul>
          {shuffleArray([...question[questionState].incorrectAnswers , question[questionState].correctAnswer]).map((item , index)=>{
            return <li key={index}>
            <input type="radio" name='choice' id={item} value={item} ref={el => (checkedInput.current[index] = el)}/>
            <label htmlFor={item}>{item}</label>
          </li>
          
          })}
        </ul>
        <button onClick={()=> nextQuestion()}>Next {question.length}</button>
      </div> : <h1>Loading...</h1>}
    </>
  )
}

export default App







