import { useDispatch } from "react-redux"
import { decrement, increment, reset } from "../Utils/CounterSlice"

const Buttons = () => {
    const dispatch = useDispatch()
    return (
        <div className="flex gap-4">
            <button onClick={()=>{
                dispatch(increment())
            }} className="border p-2 rounded-lg text-2xl text-white bg-green-500">Increment</button>
            <button onClick={()=>{
                dispatch(reset())
            }} className="border p-2 rounded-lg text-2xl text-white bg-black">Reset</button>
            <button onClick={()=>{
                dispatch(decrement())
            }} className="border p-2 rounded-lg text-2xl text-white bg-red-500">Decrement</button>
        </div>
    )
}

export default Buttons