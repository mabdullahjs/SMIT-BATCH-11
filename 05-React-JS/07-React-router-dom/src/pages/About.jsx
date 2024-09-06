import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div>About</div>
      <button><Link to="">Person 1</Link></button>
      <button><Link to="person2">Person 2</Link></button>
      <button><Link to="person3">Person 3</Link></button>
      <Outlet />
    </>
  )
}

export default About