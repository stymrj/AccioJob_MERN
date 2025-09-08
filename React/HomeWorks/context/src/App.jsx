import './App.css'
import { Navbar } from './Components/Navbar'
import { Careers } from './Components/Careers'
import { About } from './Components/About'
import { Counter } from './Components/Counter'
import { Routes, Route } from 'react-router-dom'
import { ScreenMode } from './Components/DarkMode/ScreenMode'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/services" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/mode" element={<ScreenMode />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
