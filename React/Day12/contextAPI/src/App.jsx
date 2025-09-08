import { useState } from 'react'
import { Forms } from './Components/Forms'
import { Display } from './Components/Display'
import { Navbar } from './Components/Navbar'
import { createContext } from 'react'

export const taskContext = createContext()


function App() {
  const [tasks, setTasks] = useState([])

  return (
    <taskContext.Provider value={{ tasks, setTasks }}>
      <div>
        <Navbar />
        <div className='flex'>
          <Forms />
          <Display />
        </div>
      </div>
    </taskContext.Provider>
  )
}

export default App
