import Link from 'next/link'
import React from 'react'

const App = () => {
  return (
    <>
    <h1 className='text-center text-2xl m-5'>Hello world!</h1>
    <Link href={'about'}><button className='border px-5 py-1 rounded border-white bg-[#38bdf8] text-white'>About</button></Link>
    <Link href={'contact'}><button className='border px-5 py-1 rounded border-white bg-[#38bdf8] text-white'>Contact</button></Link>
    <Link href={'products'}><button className='border px-5 py-1 rounded border-white bg-[#38bdf8] text-white'>Product</button></Link>
    </>
  )
}

export default App