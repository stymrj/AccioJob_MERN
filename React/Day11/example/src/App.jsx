import { useState } from "react"
import A from "./Components/A"


function App() {
  const[count,setCount] = useState(0)
  return (
    <div>
      {/* <p>{count}</p>
      <button onClick={()=>{setCount(count+1)}}>+</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
      <button onClick={()=>{setCount(count-1)}}>-</button> */}

      <A />
    </div>
  )
}

export default App
