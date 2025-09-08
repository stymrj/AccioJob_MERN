import { useState } from "react";
import { Input } from "./Users/Input";
import { Preview } from "./Users/Preview";

export function Careers(){

    const[val,setVal] = useState("","","","")

    return(
        <div className="grid grid-cols-2 gap">
            <Input val={val} setVal ={setVal}/>
            <Preview val={val} />
        </div>
    )
}