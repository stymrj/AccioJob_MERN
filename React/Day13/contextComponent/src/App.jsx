import { useContext, useState } from 'react'
import './App.css'
import { useMyContext, UserContext } from './Utils/Context'
import Forms from './Components/Forms'

function App() {
  //  const{age,name} = useContext(UserContext) 
      const{age,name,email,phone} = useMyContext()

  return (
    <div>
      <ul style={{fontSize:"25px"}}>
        <li>{name}</li>
        <li>{age}</li>
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
    </div>
  )
}

export default App
