import { useContext } from "react"
import { counterContext } from "../Counter"

export function Display(){

    const{count}=useContext(counterContext)

    return(
        <div className="text-9xl text-center my-4 font-bold ">
            <h1>{count}</h1>
        </div>
    )
}