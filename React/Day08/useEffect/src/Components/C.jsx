import { useEffect } from 'react'
export function C(){
    useEffect(()=>{
        console.log("C")
    },[])
    return(
        <div>
            <h1>C</h1>
        </div>
    )
}