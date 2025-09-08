import { useContext } from "react"
import { toggleContext } from "./ScreenMode"

export function Toggle(){
   const{darkMode,setDarkMode} = useContext(toggleContext)
    return(
        <div style={{border:"1px solid black", height:"100vh",width:"50vw"}}>
            <button onClick={()=>{
                setDarkMode(false)
            }}>Light</button>
            <button onClick={()=>{
                setDarkMode(true)
            }}>Dark</button>
        </div>
    )
}