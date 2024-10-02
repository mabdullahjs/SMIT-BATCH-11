import Link from 'next/link'
import React from 'react'

const Person = () => {
  return (
    <>
    <div>Person</div>
    <button className="btn btn-primary"><Link href={'/'}>Home</Link></button>
    </>
  )
}

export default Person