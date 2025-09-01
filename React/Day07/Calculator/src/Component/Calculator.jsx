import { useState } from "react"

export const Calculator = ()=>{
    const[val,setVal]=useState("0")

    function appendNumber(num){
        if(val==0){
            setVal(num)

        }else{
            setVal(val + String(num))
        }
    }

    return (
        // <div className="grid grid-cols-3">
       <div className="flex border justify-center item-center h-[80vh] bg-black m-2">
        <div className="border h-[60vh] w-[30vw] m-2 p-2">
        <div className="bg-white text-3xl text-right p-3 border-2 rounded-full ">{val}</div>
        <div className="grid grid-cols-4 gap-2">
            <button onClick={(num)=>{
                setVal("0")
                console.log(num)
            }} className="bg-white h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">C</button>
            <button onClick={()=>{appendNumber("%")}} className="bg-white h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">%</button>
            <button onClick={()=>{appendNumber("/")}} className="bg-white h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">/</button>
            <button onClick={()=>{appendNumber("**")}} className="bg-orange-400 h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">**</button>

            <button onClick={()=>{appendNumber("7")}} className="bg-white h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">7</button>
            <button onClick={()=>{appendNumber("8")}} className="bg-white h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">8</button>
            <button onClick={()=>{appendNumber("9")}} className="bg-white h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">9</button>
            <button onClick={()=>{appendNumber("*")}} className="bg-orange-400 h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">x</button>

            <button onClick={()=>{appendNumber("4")}} className="bg-white h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">4</button>
            <button onClick={()=>{appendNumber("5")}} className="bg-white h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">5</button>
            <button onClick={()=>{appendNumber("6")}} className="bg-white h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">6</button>
            <button onClick={()=>{appendNumber("-")}} className="bg-orange-400 h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">-</button>

            <button onClick={()=>{appendNumber("1")}} className="bg-white h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">1</button>
            <button onClick={()=>{appendNumber("2")}} className="bg-white h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">2</button>
            <button onClick={()=>{appendNumber("3")}} className="bg-white h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">3</button>
            <button onClick={()=>{appendNumber("+")}} className="bg-orange-400 h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">+</button>

            <button onClick={()=>{appendNumber("0")}} className="bg-white h-[70px] col-span-2 text-black text-2xl rounded-full m-2 border">0</button>
            <button onClick={()=>{appendNumber(".")}} className="bg-white h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">.</button>
            <button onClick={()=>{
                const ans = eval(val)
                console.log(ans)
                let temp = Math.floor(ans)
                if(ans-temp==0){
                    setVal(ans)
                }else{
                    setVal(eval(val).toFixed(2))
                }
            }} className="bg-orange-400 h-[70px] w-[70px] text-black text-2xl rounded-full m-2 border">=</button>
        </div>
            </div>
        {/* </div> */}
       </div>
    )
}