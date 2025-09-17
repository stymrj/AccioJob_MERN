import { useSelector } from "react-redux"

export function Display(){
    const data = useSelector((store)=>{
        return store.counter
    })
    return(
        <div className="text-9xl font-bold">
            <p>{data}</p>
        </div>
    )
}