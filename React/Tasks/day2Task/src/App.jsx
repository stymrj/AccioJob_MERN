import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ShowHideDiv } from './Components/ShowHideDiv'
import { Navbar } from './Components/Navbar'
import { HW3 } from './Components/HW3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar /> */}
      <HW3 />
      {/* <ShowHideDiv /> */}
    </>
  )
}

export default App
