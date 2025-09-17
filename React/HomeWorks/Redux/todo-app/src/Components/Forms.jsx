import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addItems } from "../Utils/ItemsSlice"



function Forms(){
    const[data,setData] = useState("")
    const dispatch = useDispatch()

    return(
        <div className="flex flex-col gap-2 items-center justify-center h-[100vh] w-[50vw]">
            <h1 className="text-2xl font-bold mb-5">Chaliye Bhaiya kuchh Add krte hai </h1>
            <input 
            onChange={(e)=>setData(e.target.value)}

            className="border p-2 w-[30vw] rounded-lg" type="text" placeholder="Kya Add kariyega Bhaiya Ji" />
            
            {/* <h1>{data}</h1> */}
            
            <button 
            onClick={()=>(dispatch(addItems(data)))}
            className="border bg-black text-white p-2 rounded-lg">Add Kardo Bhaiya</button>
            
            
        </div>
    )
}

export default Forms