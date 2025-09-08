import { Degree } from "./UserInfo/Degree";
import { Email } from "./UserInfo/Email";
import { Locations } from "./UserInfo/Locations";
import { Name } from "./UserInfo/Name";
import { Phone } from "./UserInfo/Phone";

export function Preview({data}){
    return(
        <div className='flex flex-col bg-gray-100 justify-center items-center text-xl  h-[96vh] w-[100vw] p-4 '>
            <div className="flex flex-col text-3xl font-bold m-2 p-3 h-[50vh] w-[25vw] justify-center items-center rounded-2xl">

            <p><Name data={data[0]}/></p>
            <p><Email data={data[1]}/></p>
            <p><Phone data={data[2]}/></p>
            <p><Locations data={data[3]}/></p>
            <p><Degree data={data[4]}/></p>
            </div>
        </div>
    )
}