import { useState } from 'react'
import './App.css'
import Forms from './Components/Forms'
import Display from './Components/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex h-[100vh]'>
      <Forms />
      <Display />
    </div>
  )
}

export default App
