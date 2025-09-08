import { useEffect } from "react"
import { useState } from "react"
import {Shimmer} from './Shimmer'

export function HarryPotter(){
    const[dataFromAPI, setData]= useState([])
    useEffect(()=>{
        async function getData() {
            const res = await fetch('https://hp-api.onrender.com/api/characters')
            const data = await res.json()
            // console.log(data)
            setData(data)
        }
        getData()
    },[])
    return dataFromAPI.length > 0 ? (
         <div className="grid grid-cols-4 gap-2 p-3 m-3">
           {dataFromAPI.map((item)=>{
            return(
                <div className="m-2 p-2 border justify-center h-60 w-60 rounded-xl">
                    <div className="flex flex-col items-center">
                    <img className="h-[100px] w-[100px] rounded-full" src={item.image || "https://ik.imagekit.io/hpapi/harry.jpg"} alt="" />
                    <h1 className="text-xl font-bold mt-2">{item.name}</h1>
                    <h1 className="text-s">{item.gender}</h1>
                    <h1 className="">{item.dateOfBirth || "00-00-0000"}</h1>
                    </div>
                </div>
            )
           })}
        </div>
    ) : <Shimmer />
}