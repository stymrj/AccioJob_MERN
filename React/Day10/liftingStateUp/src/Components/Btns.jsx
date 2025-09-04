export function Btns({val,setVal}){
    return(
        <div className="flex gap-4 border-2 m-5 p-5 rounded-lg  items-center justify-center h-[80vh] w-[80vh]">
            <button className="border rounded-2xl text-3xl p-4 bg-green-400 m-4" onClick={()=>setVal(val+1)}>+</button>
            <button className="border rounded-2xl text-3xl p-4 bg-yellow-400 m-4" onClick={()=>setVal(0)}>Reset</button>
            <button className="border rounded-2xl text-3xl p-4 bg-red-600 m-4" onClick={()=>setVal(val-1)}>-</button>
        </div>
    )
}