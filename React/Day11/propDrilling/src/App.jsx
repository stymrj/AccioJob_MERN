import { useState } from "react"
import A from "./Components/A";;;
import { createContext } from "react"


export const textContext = createContext()

function App() {
  const [text, setText] = useState("")
  return (
    <textContext.Provider value={{text, name:"satyam"}}>
      <div>
        <input onChange={(e) => {
          setText(e.target.value)
        }} type="text" />

        {/* <A text={text} /> */}
        <A /> 

      </div>
    </textContext.Provider>
  )
}

export default App
