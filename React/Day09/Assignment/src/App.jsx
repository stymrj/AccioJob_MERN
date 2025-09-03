import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import { Input } from './Components/Input'
import { Navbar } from './Components/Navbar'
import { Counter } from './Components/Counter'
import { HarryPotter } from './Components/HarryPotter'



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/input" element = {<Input />}/>
        <Route path="/counter" element = {<Counter />}/>
        <Route path="/hp" element = {<HarryPotter />}/>
      </Routes>
    </div>
  )
}

export default App
