import { Names } from "./Names"
import { Emails } from "./Emails"
import { Locations } from "./Locations"
import { Course } from "./Course"

export function Preview({val}){
    return(
        <div className="flex flex-col items-center gap-2 text-3xl font-bold h-[100vh] justify-center p-5 bg-cyan-100">
            <h1 className="mb-25 text-red-600 underline italic">Lifting State Up</h1>
            <Names val={val[0]}/>
            <Emails val={val[1]}/>
            <Locations val={val[2]} />
            <Course val={val[3]} />
        </div>
    )
}