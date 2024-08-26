// import { useState } from "react";

// function App() {

//   const [num, setNum] = useState(0);
//   const addCounter = () => {
//     setNum(num + 1)
//   }

//   const lessCounter = () => {
//     if (num < 1) {
//       console.log("set num wala kaam nahi krwana")
//       return
//     }
//     setNum(num - 1)

//   }
//   return (
//     <>
//       <h1>Hello world {num}</h1>
//       <button onClick={addCounter}>add {num}</button>
//       <button onClick={lessCounter}>less {num}</button>
//     </>
//   )
// }

// export default App







import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

const App = () => {
  const [todo, setTodo] = useState([]);
  const todoVal = useRef();

  const addTodo = (event) => {
    event.preventDefault()
    todo.push(todoVal.current.value);
    setTodo([...todo]);
    console.log(todo)


    todoVal.current.value = ""
  }

  const deleteTodo = (index)=>{
    console.log("todo deleted" , index)
    todo.splice(index , 1);
    setTodo([...todo]);
  }
  const editTodo = (index)=>{
    console.log("todo edited" , index);
    const editedVal = prompt("enter edited value");
    todo.splice(index , 1 , editedVal);
    setTodo([...todo]);
  }
  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input type="text" placeholder='enter todo value' ref={todoVal} />
        <button type='submit'>Add Todo</button>
      </form>
      <ol>
        {todo.length > 0 ? todo.map((item, index) => {
          return <div key={index}>
            <li>{item}</li>
            <button onClick={()=> deleteTodo(index)}>Delete</button>
            <button onClick={()=> editTodo(index)}>Edit</button>
          </div>
        }) : <p>No todo found!</p>}
      </ol>

    </>
  )
}

export default App











