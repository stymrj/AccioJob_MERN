import { useEffect } from "react"
import { useState } from "react"

export function Users(){

    const[usersInfo,setUsersInfo] = useState([])
    

    useEffect(()=>{
        async function getData() {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            setUsersInfo(data)
            console.log(data)
        }
        getData()
    },[])

    return(
        <div>

        <div className="grid grid-cols-3 gap-3 w-[98vw] m-3">
            {usersInfo.map((item)=>(
                <div className="border rounded-2xl flex flex-col items-center bg-cyan-200 p-2 ">
                <h1 className="text-xl font-bold mb-2">{item.name}</h1>
                <h1 className="">📧 {item.email}</h1>
                <h1 className="">📞 {item.phone}</h1>
                <h1 className="">📍 {item.address.city}</h1>
                <h1 className=""><span className="font-bold"> Working at :</span> {item.company.name}</h1>

                </div>
            ))}
            </div>
        </div>
    )
}