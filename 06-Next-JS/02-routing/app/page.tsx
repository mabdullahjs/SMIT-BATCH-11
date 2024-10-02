import Link from "next/link"
import Btn from "./components/Btn"
import Card from "./components/Card"

function App(){
  console.log("my first server component")
  return (
    <>
    <h1 className="text-center text-4xl font-bold">Hello world!</h1>
    <Card title="hello"/>
    <div className="text-center">
    <Btn /> <br /><br />
    </div>
    <div className="text-center">
    <button className="btn btn-primary"><Link href={'about'}>About</Link></button> <br /><br />
    <button className="btn btn-primary"><Link href={'contact'}>Contact</Link></button><br /><br />
    <button className="btn btn-primary"><Link href={'/about/person'}>nested route</Link></button><br /><br />
    <button className="btn btn-primary"><Link href={'/product'}>Products</Link></button><br /><br />
    </div>
    </>
  )
}

export default App