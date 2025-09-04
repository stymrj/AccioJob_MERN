export function Display({val
}){
    return(
        <div className="flex items-center justify-center border-2 rounded-lg m-5 p-5 h-[80vh] w-[80vw]">
            <p className="text-9xl font-extrabold text-blue-700">{val}</p>
        </div>
    )
}