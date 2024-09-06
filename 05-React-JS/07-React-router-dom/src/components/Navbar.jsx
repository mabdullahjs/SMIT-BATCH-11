import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        margin: "30px"
    }}>
        <Link to="">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        <Link to="service">Services</Link>
    </div>
  )
}

export default Navbar