import { useState } from 'react'
import './App.css'
import { Btns } from './Components/Btns'
import { Display } from './Components/Display'

function App() {
  const [val, setVal] = useState(0)

  return (
    <div className='flex justify-between h-[100vh] w-[100vw] '>
      <Btns val={val} setVal={setVal}/>
      <Display val={val}/>
    </div>
  )
}

export default App
