import { useState } from "react"

export function Introduce() {
    const [val, setVal] = useState()
    return (
        <div>
            <input onChange={(e) => {
                setVal(e.target.value)
            }} type="text" placeholder="Enter Your Name..." />
            <h1 className="text-7xl">Welcome {val}!</h1>

            {val.length > 0 && <h1 className="text-7xl">Greetings {val}!</h1>}
            {val.length > 0 ? <h1 className="text-7xl">Welcome {val}!</h1> : null}

        </div>
    )
}
