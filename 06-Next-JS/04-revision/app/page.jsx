import Link from "next/link";
import Btn from "./components/Btn";

const Page = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users' , {
    cache: 'no-store',
  });
  const response = await data.json()
  console.log(response)
  return (
    <>
    <h1>{new Date().toLocaleTimeString()}</h1>
    <h1 className="text-center">Hello world</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquid aspernatur quas blanditiis atque quis dolor eaque impedit, beatae velit dolores explicabo? Repellat labore adipisci minima cupiditate autem exercitationem cum.</p>
    <Link href={'about'}>About</Link>
    <ul>
      {response.map((item , index)=>{
        return  <li key={item.id}><Link href={`/users/${item.id}`}>{item.name}</Link></li>
      })}
    </ul>
    <Btn/>

    </>
  )
}

export default Page