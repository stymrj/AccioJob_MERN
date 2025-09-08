import { useContext } from "react"
import { toggleContext } from "./ScreenMode"

export function LightMode(){

    const{darkMode} = useContext(toggleContext)
    
    return(
        <div style={{border:"1px solid black", height:"100vh",width:"50vw",
            backgroundColor : (darkMode?"black":"white")
        }}> 
            text
        </div>
    )
}