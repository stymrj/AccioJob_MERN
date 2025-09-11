import { useContext } from "react"
import { themeContext } from "../App"

export function Left(){
    const{darkMode, setDarkMode}= useContext(themeContext)
    return(
        <div style={{display:"flex", border:"1px solid black",height:"100vh", width:"50vw"}}>
            <div>
                <button onClick={()=>(setDarkMode(true))}>Light Mode</button>
                <button onClick={()=>(setDarkMode(false))}>Dark Mode</button>
            </div>
        </div>
    )
}