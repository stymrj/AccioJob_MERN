import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Profile from './Components/Profile'
import Signup from './Components/Signup'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import { UserInfo } from './Utils/userInfo'
import Error from './Components/Error'


function App() {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path='/' element={<UserInfo />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/profile' element={<Profile />} />
        </Route>

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
