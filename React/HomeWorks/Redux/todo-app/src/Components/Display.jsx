import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { clearItems } from "../Utils/ItemsSlice"


function Display(){
    const dispatch = useDispatch()
    const data = useSelector((s)=>s.shoppingList)

    return(
        <div className="flex flex-col items-center justify-center bg-cyan-100 w-[50vw]">
            <button
            onClick={()=>(dispatch(clearItems()))}
            className="bg-red-600 p-2 rounded-lg text-white">Clear List</button>
            <h1 className="text-xl font-bold bg-black text-white p-2 m-2 rounded-lg">Apka Shopping List Ready Hai..</h1>
            <div className="text-xl p-2 font-bold">
            <ul className="list-disc text-blue-600 text-2xl">
                {data.map((items)=>(
                    <li>{items}</li>
                ))}
            </ul>
            </div>
        </div>
    )
}

export default Display