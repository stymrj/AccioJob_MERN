import { useState } from "react"

export function HW3(){
    const[items, setItems] = useState([])
    const[text, setText] = useState("")
    return (
        <div>
            <input onChange={(e)=>{
                setText(e.target.value)
                // console.log(text)
            }}
            className="border" type="text" value={text} placeholder="Enter Name" />

            <button onClick={()=>{
                // setItems([text])
                setItems([...items, text])
                // setItems([text, ...items])
                setText("")

            }}>Add</button>

            {items.length>0 &&
                <div className="text-x-2">

                <ul>
                {items.map((item)=>{
                    return <li>{item}</li>
                })}
            </ul>
                </div>
            }
        </div>

    )
}