
import { useState } from "react"

export function Counter(){
    const[val,setVal] = useState(0)
    return(
        <div className="flex item-center justify-center h-[88vh]">
            <div className="bg-white border-2 rounded-2xl mt-50 w-72 text-center p-8 w-75 h-65">
                <h1 className="text-center text-4xl font-extrabold mb-6">Counter App</h1>
                <p className="font-extrabold text-5xl text-red-600 mb-6">{val}</p>
                <div className="flex jusitfy-center gap-5">
                <button className="bg-green-500 text-white font-bold px-4 py-2 rounded-lg" onClick={(()=>{setVal(val+1)})}>+</button>
                <button className="bg-cyan-500 text-white font-bold px-4 py-2 rounded-lg" onClick={(()=>{setVal(0)})}>Reset</button>
                <button className="bg-yellow-500 text-whhite font-bold px-4 py-2 rounded-lg" onClick={(()=>{setVal(val-1)})}>-</button>
                </div>
            </div>
        </div>
    )
}