import { useNavigate, NavLink, Link, Routes, Route } from 'react-router-dom'
import A from './Components/A'
import B from './Components/B'
import C from './Components/C'

function App() {
  const navigate = useNavigate()
  return (
    <div>
      <div className='bg-black text-white flex justify-between px-5'>
        {/* <nav>
        <Link to={}>A</Link>
        <Link to={}>B</Link>
        <Link to={}>C</Link>
      </nav> */}

        <NavLink
          to={'/a'}
          className={({ isActive }) => isActive ? "text-yellow-400" : ""}
        >Apple</NavLink>

        <NavLink
          to={'/b'}
          className={({ isActive }) => isActive ? "text-yellow-400" : ""}
        >Ball</NavLink>


        <NavLink
          to={'/c'}
          className={({ isActive }) => isActive ? "text-yellow-400" : ""}
        >Cat</NavLink>


        </div>
        <div>
        <Routes>
          <Route path='/a' element={<A />} />
          <Route path='/b' element={<B />} />
          <Route path='/c' element={<C />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
