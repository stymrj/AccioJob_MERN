import {C} from './C.jsx'
import { useEffect } from 'react'

export function B(){
    useEffect(()=>{
        console.log("B")
    },[])
    return(
        <div>
            <h1>B</h1>
            <C />
        </div>
    )
}