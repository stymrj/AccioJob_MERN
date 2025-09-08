
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import { Profile } from './Components/Profile'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Navbar } from './Components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
    </div>

  )
}

export default App
