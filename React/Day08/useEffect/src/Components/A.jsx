import { useEffect } from 'react'
import { B } from "./B.jsx";


export function A(){
    useEffect(()=>{
        console.log("A")
    },[])
    return(
        <div>
            <h1>B</h1>
            <B />
        </div>
    )
}
