import React from 'react'
import { useSelector } from 'react-redux';

const Navbar = () => {

    const selector = useSelector(state => state.cart.cartItems);
    console.log(selector);
  return (
   <>
   <h1>Product App</h1>
   <h2>cart {selector.length}</h2>
   </>
  )
}

export default Navbar