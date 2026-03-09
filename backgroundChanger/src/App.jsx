import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 flex items-center justify-center"
    style={{backgroundColor: color}}
    >
      <h1 className="flex justify-center bottom-60 inset-x-0 px-2 text-6xl font-bold capitalize 
      bg-white px-3 py-2 rounded-3xl">React backGround changer</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <button
          onClick={() => setColor("violet")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Violet"}}
          >Violet</button>

          <button
          onClick={() => setColor("indigo")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Indigo"}}
          >Indigo</button>
          
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Blue"}}
          >Blue</button>
          <button
          onClick={() => setColor("Green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Green"}}
          >Green</button>
          <button
          onClick={() => setColor("Yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Yellow"}}
          >Yellow</button>

          <button
          onClick={() => setColor("Orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Orange"}}
          >Orange</button>

          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
        </div>
      </div>
    </div>
  )
}

export default App