export function Products({name,price,image,stock}){
    return (
        <div className="border-2 rounded-2xl p-2 m-4">
            <img className="h-60 w-60 rounded-xl" src={image} alt="" />

            <div className="flex flex-col items-left mt-3 mb-2 ml-3">
            <h1 className="text-xl font-bold">{name}</h1>
            <span>₹{price}</span>
            <p className="text-blue-600 font-semibold">{stock}</p>

            </div>
        </div>
    )

}