export function Events({name,loc,date,desc,org}){
    return(
        <div className=" m-4 p-4 rounded-2xl border-2 ">
            <h1 className="text-xl font-bold mb-2">{name}</h1>
            <p className="text-gray-600 mb-1">📍{loc}</p>
            <p className="text-gray-600 mb-1">📅 {date}</p>
            <p className="text-gray-600 mb-1">{desc}</p>
            <p className="text-blue-400 italic">Organized by {org}</p>
        </div>
    )
}