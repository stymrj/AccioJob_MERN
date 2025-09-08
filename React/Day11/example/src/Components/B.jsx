import { createContext } from "react"
import C from "./C"

export const exContext = createContext()

function B() {

  return (
    <exContext.Provider value={{name: 'satyam', age:24}}>
    <div>
        <C />
    </div>

    </exContext.Provider>
  )
}

export default B
