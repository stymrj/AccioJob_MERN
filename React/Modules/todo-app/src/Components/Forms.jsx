import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addItems } from "../Utils/todoSlice"
function Forms(){
    const dispatch = useDispatch()
    const[text, setText]= useState("")
    return(
        <div className="flex items-center justify-center gap-2 m-4 p-4 w-[50vw]">
            <input onChange={(e)=>{
                setText(e.target.value)
            }} 
            className="border" type="text" />
            <button
            className="border p-1 rounded-lg"
            onClick={()=>(dispatch(addItems(text)))}>Add Items</button>
            {/* <p>{text} </p> */}
        </div>
    )
}
export default Forms