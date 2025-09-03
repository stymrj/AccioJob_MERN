import { useState } from "react"

export function Input(){
    const[text,setText] = useState("")
    const[items,setItems] = useState([])

    return(
        <div className="">
            <h2 className="text-bold m-2 p-2">Add Names of Students</h2>
            <input onChange={(e)=>{setText(e.target.value)}} className="m-2 p-2" type="text" placeholder="Enter your msg!" />
            
            <p>{text}</p>
            
            <button onClick={()=>{
                    setItems([...items,text])
                    setText("")
                console.log(items)
            }} className="border-2 bg-blue-600 text-white w-23 rounded-xl p-2 m-2">Add</button>


            <ul className="list-disc pl-6">
                {items.map((i)=>{
                    return <li>{i}</li>
                })}
            </ul>
        </div>
    )
}