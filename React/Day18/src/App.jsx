import { useState } from 'react'
import './App.css'
import { useRef } from 'react'

// function App() {
//   let count = 0
//   const tempRef = useRef(0)
//   const [temp, setTemp] = useState("")
//   console.log(count)
//   return (
//     <div>
//       <input
//       onChange={(e)=>setTemp(e.target.value)}
//       value={temp} type="text" />

//       <p>{tempRef.current}</p>

//       <button onClick={()=>{
//         tempRef.current = tempRef.current+1
//         count++
//       }}>Increment</button>
//       <button onClick={()=>{
//         tempRef.current = tempRef.current-1
//         count--
//       }}>Decrement</button>

//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App