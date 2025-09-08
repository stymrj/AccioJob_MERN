import { useEffect } from "react"
import { useState } from "react"

export function Products(){

    const[productsInfo,setProductsInfo] = useState([])
    

    useEffect(()=>{
        async function getData() {
            const res = await fetch("https://dummyjson.com/products")
            const data = await res.json()
            setProductsInfo(data.products)
            console.log(productsInfo)
        }
        getData()
    },[])

    return(
        <div>
            <div className="grid grid-cols-3 gap-2 m-2">
                {productsInfo.map((item)=>(
                    <div className="border rounded-2xl m-2 p-2 bg-green-200">
                    <img className="h-[30vh] w-[40vw] item-center" src={item.images[0]} alt="" />
                    <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
                    <p className="mb-3">{item.description}</p>
                    <div className="flex mb-2">
                    <h1 className="mb-1"><span className="font-bold">Category: </span>{item.category}</h1>
                    <h1 className="mb-1"><span className="font-bold">Price: </span>{item.price}</h1>
                    <h1 className="mb-1"><span className="font-bold">Stock: </span>{item.stock}</h1>
                    <span className=""><span className="font-bold">Rating: </span> {item.rating}⭐</span>
                    </div>
                </div>
                ))}
            </div>

        </div>
    )
}