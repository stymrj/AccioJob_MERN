import { useState } from 'react'
import { stateUpLifting } from './Components/stateUpLifting'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <stateUpLifting />
    </div>
  )
}

export default App 
