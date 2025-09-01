import { useState } from "react"
import { useEffect } from "react"

function HarryPoter(){
    const[dataFromAPI, setData]= useState([])

    useEffect(()=>{
        async function getData() {
            const res = await fetch ('https://hp-api.onrender.com/api/characters')
            const data = await res.json()
            setData(data)
            console.log(data)
        }
        getData()
    },[])
    return(
        <div>
           {dataFromAPI.map((item)=>{
            return(
                <div className="grid grid-cols-4 gap-2 m-2 p-2 border-1 justify-center h-60 w-60">
                    <div>
                    <h1 className="text-2xl font-bold">{item.name}</h1>
                    <h1 className="text-s">{item.gender}</h1>
                    <h1 className="">{item.dateOfBirth}</h1>

                    </div>
                </div>
            )
           })}
        </div>
    )

}

export default HarryPoter