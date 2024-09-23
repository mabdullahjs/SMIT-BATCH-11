// import React, { useRef } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addTodo, removeTodo } from './config/redux/reducers/todoSlice'

// const App = () => {

//   const todoVal = useRef()

//   // dispatch
//   const dispatch = useDispatch()

//   //selector
//   const selector = useSelector(state => state.todos.todo);
//   console.log(selector);


//   const addTodoInRedux = (event) => {
//     event.preventDefault()
//     console.log("todo added", todoVal.current.value)
//     dispatch(addTodo({
//       title: todoVal.current.value
//     }))
//   }


//   const deleteItemFromRedux = (index)=>{
//     console.log("delete item" , index);
//     dispatch(removeTodo({
//       index
//     }))

//   }


//   return (
//     <>
//       <form>
//         <input type="text" ref={todoVal} />
//         <button onClick={addTodoInRedux}>add Todo</button>

//       </form>
//         <ul>
//           {selector.length > 0 ? selector.map((item , index) => {
//             return <li key={item.id}>{item.title}
//             <button onClick={()=>deleteItemFromRedux(index)}>delete</button></li>
//           }) : <h1>No data found</h1>}
//         </ul>
//     </>
//   )
// }

// export default App





import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from './config/redux/reducers/cartSlice';
import Navbar from './component/Navbar';

const App = () => {

  const [products, setProducts] = useState(null)


  //selector
  const selector = useSelector(state => state.cart.cartItems);
  console.log(selector);

  // dispatch
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        setProducts(res.products)
      })
      .catch(err => console.log(err))
  }, [])

  const addToCart = (item) => {
    dispatch(addCartItem({
      item
    }))
    

  }

  const apiUrl = import.meta.env.VITE_API_URL;
const appName = import.meta.env.VITE_APP_NAME;
const username = import.meta.env.VITE_USERNAME
const age = import.meta.env.VITE_AGE

console.log('API URL:', apiUrl);
console.log('App Name:', appName);
console.log('App Name:', username);
console.log('App Name:', age);
  return (
    <>
     <Navbar/>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px"
      }}>
        {products ? products.map((item) => {
          return <div style={{
            border: "1px solid black",
            borderRadius: "20px",
            padding: "20px",
            margin: "10px"
          }} key={item.id}>
            <img width="200" src={item.thumbnail} alt="productImg" />
            <h2>{item.title.slice(0, 10) + "..."}</h2>
            <h1>{item.price}</h1>
            <button onClick={() => addToCart(item)}>add To cart</button>
          </div>
        }) : <p>Item not found</p>}
      </div>
    </>
  )
}

export default App