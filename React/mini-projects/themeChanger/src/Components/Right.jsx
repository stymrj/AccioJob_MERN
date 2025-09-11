import { useContext } from "react"
import { themeContext } from "../App"

export function Right(){
    const{darkMode, setDarkMode}=useContext(themeContext)
    return(
        <div style={{border:"1px solid black", width:"50vw", height:"100vh",
            backgroundColor : (darkMode?"white":"black")
        }}>
            Right
        </div>
    )
}