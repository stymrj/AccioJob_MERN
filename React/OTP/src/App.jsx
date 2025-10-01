import { useState } from 'react'
import './App.css'
import Otp from './Components/Otp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Otp />
    </div>
  )
}

export default App
