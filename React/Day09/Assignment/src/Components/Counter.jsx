import { useState } from "react"

export function Counter(){
    const[val,setVal] = useState(0)
    return(
        <div className="">
            <div>
                <p>{val}</p>
                <button className="border-2" onClick={(()=>{setVal(val+1)})}>+</button>
                <button className="border-2" onClick={(()=>{setVal(0)})}>Reset</button>
                <button className="border-2" onClick={(()=>{setVal(val-1)})}>-</button>
            </div>
        </div>
    )
}