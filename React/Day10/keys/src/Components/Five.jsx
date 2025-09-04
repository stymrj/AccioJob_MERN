import { useState , useEffect } from "react"

export function Five(){

    const[countw, setCountw] = useState(0)

    useEffect(()=>{
    console.log("Five Component Mounted..")
  })
    return(
        <div>
      <p onClick={()=>{setCountw(countw+1)}}>{countw}</p>
            
        </div>
    )
}