import { Five } from "./Five"
import { useEffect } from "react"

export function Two(){

    useEffect(()=>{
    console.log("Two Component Mounted..")
  })

    return(
        <div>
            <Five />
        </div>
    )
}