import { useState } from "react"
import { createContext } from "react"
import { LightMode } from "./LightMode"
import { Toggle } from "./Toggle"

export const toggleContext = createContext()

export function ScreenMode() {
    const[darkMode,setDarkMode]= useState(false)
    return (
        <toggleContext.Provider value={{darkMode,setDarkMode}}>
            <div style={{display:"flex", padding:"6px", margin:"4px"}}>
                <Toggle />
                <LightMode />
            </div>
        </toggleContext.Provider>
    )
}