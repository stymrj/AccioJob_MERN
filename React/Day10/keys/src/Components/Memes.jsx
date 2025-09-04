import { useEffect } from "react"
import { useState } from "react"

function Memes(){

    const[memes,setMemes]=useState([])
    useEffect(()=>{
        async function getMemes() {
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data = await res.json()
            if(data.success){
                setMemes(data.data.memes)
            }
            // console.log(data.data.memes)
            console.log(data.data.memes)
        }
        getMemes()
    },[])

    return(
        <div>
            {memes.map((item)=>{
                <h1>{item.name}</h1>
            })}
        </div>
    )
}

export default Memes