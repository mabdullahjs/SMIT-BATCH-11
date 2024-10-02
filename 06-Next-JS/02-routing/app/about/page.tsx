import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <>
    <div>About</div>
    <button className="btn btn-primary"><Link href={'/'}>Home</Link></button>
    </>
  )
}

export default About