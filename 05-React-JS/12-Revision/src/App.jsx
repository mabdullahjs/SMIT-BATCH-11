// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import Card from './component/Card'

// const App = () => {
//   const [counter, setCounter] = useState(0)
//   console.log(import.meta.env.VITE_USERNAME);

//   useEffect(() => {
//     console.log("component mount!")
//   }, [])
//   return (
//     <>
//       <h1>Hello world! {counter}</h1>
//       <button onClick={() => setCounter(counter + 1)}>add</button>
//       <button onClick={() => setCounter(counter - 1)}>less</button>

//       {counter > 5 ? <Card title="shampoo" description="try catch rozana shampoo" /> : <p>Bacha hi rhoga..</p>}
//     </>
//   )
// }

// export default App



import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodo, removeTodo } from './config/redux/reducers/todoSlice';

const App = () => {

  // use ref for forms value
  const ref = useRef()

  // use selector
  const selector = useSelector(state => state.todos.todos);
  console.log(selector)

  // useDispatch 
  const dispatch = useDispatch()

  // add todo into redux

  const todo = (event) => {
    event.preventDefault()
    console.log(ref.current.value)
    dispatch(addTodo({
      title: ref.current.value
    }))
  }

  // delete todo
  const deleteTodo = (index)=>{
    console.log('todo delete' , index);
    dispatch(removeTodo({
      index
    }))
    
  }


  // update Todo
  const updateTodo = (index)=>{
    const promptTitle = prompt("enter data")
    dispatch(editTodo({
      title: promptTitle,
      index 
    }))

    



  }

  return (
    <>
    <h1>Todo App</h1>
      <form onSubmit={todo}>
        <input type="text" placeholder='enter todo' ref={ref} />
        <button >addTodo</button>
      </form>

      <ol>
        {selector.map((item , index) => <li key={item.id}>{item.title} <button onClick={()=> deleteTodo(index)}>delete</button> <button onClick={()=> updateTodo(index)}>edit Todo</button> </li>)}
      </ol>
    </>
  )
}

export default App