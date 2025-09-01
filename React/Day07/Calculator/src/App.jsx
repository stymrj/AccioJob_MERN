import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Calculator } from './Component/Calculator'
import { Navbar } from './Component/Navbar'
import { Footer } from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Calculator />
      <Footer />
    </>
  )
}

export default App
