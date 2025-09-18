import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addText } from "../Utils/todoSlice"
import {v4 as uuid} from 'uuid'


export function Forms(){
    const[text,setText] = useState('')
    const dispatch = useDispatch()
    return(
        <div className="flex flex-col justify-center items-center gap-3 w-[50vw]">
            <input
            onChange={(e)=>setText(e.target.value)}
            value={text} className="border p-2 rounded-lg w-[20vw]" type="text" placeholder="Enter Items to add..." />
            <button
            onClick={()=>{
                if(text==''){
                    return
                }
                dispatch(addText({text, id : uuid()}))
                setText("")
            }}
            className="border bg-black text-white p-2 rounded-lg w-[10vw]">Add</button>
        </div>
    )
}