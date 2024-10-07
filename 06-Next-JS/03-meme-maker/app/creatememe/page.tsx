"use client"

import Image from 'next/image';
import React, { useRef, useState } from 'react'

const CreateMeme = ({searchParams}: {searchParams: {id: string; url: string}}) => {
    // console.log(searchParams);
    const [meme , setMeme] = useState<string | null>(null);
    const text1 = useRef<HTMLInputElement>(null)
    const text2 = useRef<HTMLInputElement>(null)


    const createMeme = async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log(text1.current?.value);
        console.log(text2.current?.value);

        const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=mabdullah6600&password=asdfgfdsa123&text0=${text1.current?.value}&text1=${text2.current?.value}` , {
            method: 'POST'
        })
        const response = await data.json()
        console.log(response);
        setMeme(response.data.url)
        
    }
    
  return (
    <>
    <div>CreateMeme</div>
    <Image src={searchParams.url} width={200} height={200} alt='meme'/>

    <form onSubmit={createMeme}>
        <input type="text" placeholder='enter text 1' ref={text1}/>
        <input type="text" placeholder='enter text 2' ref={text2} />
        <button type='submit'>create meme</button>
    </form>

    {meme ? <Image src={meme} width={200} height={200} alt='meme'/> : null}
    </>
  )
}

export default CreateMeme 