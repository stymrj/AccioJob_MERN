import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { Two } from './Components/Two'
import Memes from './Components/Memes'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("App Component Mounted..")
  })

  return (
   <div>
      {/* <p onClick={()=>{setCount(count+1)}}>{count}</p> */}
      {/* <Two /> */}
      <Memes />
   </div>
  )
}

export default App
