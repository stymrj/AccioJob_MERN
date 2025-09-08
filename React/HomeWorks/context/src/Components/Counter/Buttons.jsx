import { useContext } from "react"
import { counterContext } from "../Counter"

export function Buttons() {
    const { count, setCount } = useContext(counterContext)

    return (
        <div>
            <button onClick={() => {
                setCount(count + 1)
            }} className="border text-white font-bold text-2xl bg-green-600 m-7  w-[10vw] rounded-full p-3">+</button>
            <button onClick={() => {
                setCount(0)
            }} className="border text-white text-2xl font-bold bg-red-600 m-7  w-[10vw] rounded-full p-3">Reset</button>
            <button onClick={() => {
                setCount(count - 1)
            }} className="border text-white text-2xl font-bold bg-orange-400 m-7 w-[10vw] rounded-full p-3">-</button>
        </div>
    )
}