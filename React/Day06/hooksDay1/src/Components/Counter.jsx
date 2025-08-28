import { useState } from "react"

export function Counter() {
    const [count, setVal] = useState(0)
    return (
        <div>
            <div>
                <div>{count}</div>
                <div>
                    <button onClick={()=>{
                        setVal(count+1)
                    }}>+</button>

                    <button onClick={()=>{
                        setVal(0)
                    }} >Reset</button>

                    <button onClick={()=>{
                        setVal(count-1)
                    }}>-</button>
                </div>
            </div>
        </div>
    )
}