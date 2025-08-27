export function Movies({image, title, genre, rating}){
    return (
        <div className="m-4 p-4 border-2 rounded-2xl">
            <img className="h-50 w-90 rounded-2xl" src={image} alt="" />
            <h1 className="text-center text-xl font-bold text-red-600">{title}</h1>
            <div className="flex flex-row gap-70">
            <span className="font-semibold italic">{genre}</span>
            <span className="font-extrabold bg-amber-300 rounded-xl p-1">{rating}</span>
            </div>
                
        </div>
    )
}