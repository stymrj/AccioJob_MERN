import { createContext } from "react"
import { Display } from "./Counter/Display"
import { Buttons } from "./Counter/Buttons"
import { useState } from "react"

export const counterContext = createContext()


export function Counter(){
    const [count, setCount] = useState(0)
    return(
    <counterContext.Provider value={{count,setCount}}>
        <div className="min-h-screen flex flex-col ">
        <div className="flex-grow flex justify-center items-center">
          <div className="border rounded-2xl p-6 bg-cyan-100 shadow-lg">
          <h1 className="text-5xl font-extrabold text-center ">Counter App</h1>
            <Display />
            <Buttons />

          </div>
        </div>
      </div>
    </counterContext.Provider>
    )
}