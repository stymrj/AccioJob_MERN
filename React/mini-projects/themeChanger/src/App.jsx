import { createContext, useState } from "react"
import { Left } from "./Components/Left"
import { Right } from "./Components/Right"

//Using lifting the State Up

// function App() {
//   const[darkmode, setDarkmode ]= useState(false)
//   return (
//     <div style={{display:"flex"}}>
//       <Left darkmode={darkmode} setDarkmode={setDarkmode}/>
//       <Right darkmode={darkmode}/>
//     </div>
//   )
// }
// export default App


// Using the Context API

export const themeContext = createContext()

function App() {
  const[darkMode, setDarkMode ]= useState(false)

  return (
    <themeContext.Provider value={{darkMode,setDarkMode}}>
    <div style={{display:"flex"}}>
      <Left />
      <Right />
    </div>
    </themeContext.Provider>
  )
}
export default App