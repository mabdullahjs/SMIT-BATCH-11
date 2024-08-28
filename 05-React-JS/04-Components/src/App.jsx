import Button from "./components/Button"
import Card from "./components/Card"

function App() {
  return (
    <>
      <h1 className="text-center bg-[#38bdf8] text-white text-5xl p-5 ">Hello world!</h1>
      <div className="text-center m-5">
        <Button title="click" />
        <Button title="login" />
        <Button title="add Todo" src="" alt=""/>
      </div>

     <div className="flex justify-center gap-5 flex-wrap">
     <Card src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="shoes" description="best shoes in the world from saddar lunda bazaar kiraanchi"/>
     <Card src="https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" title="Camera" description="original dslr camera bought from sheershah karachi"/>
     <Card src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="shoes" description="best shoes in the world from saddar lunda bazaar kiraanchi"/>
     <Card src="https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" title="Camera" description="original dslr camera bought from sheershah karachi"/>
     <Card src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="shoes" description="best shoes in the world from saddar lunda bazaar kiraanchi"/>
     <Card src="https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" title="Camera" description="original dslr camera bought from sheershah karachi"/>
     <Card src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="shoes" description="best shoes in the world from saddar lunda bazaar kiraanchi"/>
     <Card src="https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" title="Camera" description="original dslr camera bought from sheershah karachi"/>
     <Card src="https://images.unsplash.com/photo-1721332149346-00e39ce5c24f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" title="Camera" description="original dslr camera bought from sheershah karachi"/>
     </div>
    </>
  )
}

export default App