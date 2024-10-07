// import Image from 'next/image'
// import React from 'react'
// import myImage from './assets/1698725178272.jpeg'
// // import img from '@/app/assets/1698725178272.jpeg'

// const Page = async () => {

//   const data = await fetch('https://jsonplaceholder.typicode.com/users', {
//     cache: 'no-store'
//   })
//   const response = await data.json()
//   console.log(response)
//   return (
//     <>
//       <div>Page {new Date().toLocaleTimeString()}</div>
//       <Image src={myImage} width={200} height={200} alt='my-image'/>
//       <ul>
//         {response.map((item: { name: string; id: number }) => {
//           return <li key={item.id}>{item.name}</li>
//         })}
//       </ul>
//     </>
//   )
// }

// export default Page



import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Meme {
  id: string;
  name: string;
  url: string;
}

const Page = async () => {
  const data = await fetch('https://api.imgflip.com/get_memes')
  const response = await data.json()
  console.log(response.data.memes);
  

  return (
    <>
      <h1 className="text-center">Meme Maker</h1>
      <div className="flex justify-center gap-5 flex-wrap">

        {response.data.memes.map((item: Meme) => {
          return <div>
            <Image src={item.url} width={200} height={200} alt='meme' />
            <button><Link href={{
              pathname: "creatememe",
              query: {
                url: item.url,
                id: item.id
              }
            }}>generate Meme</Link></button>
          </div>
        })}

      </div>

    </>
  )
}

export default Page