import {useSelector, useDispatch} from 'react-redux'
import { clearItems, delelteItem } from '../Utils/todoSlice'
export function Display(){
    const dispatch = useDispatch()
    const slicedData = useSelector((store)=>store.data)
    return(
        <div className="flex flex-col justify-center items-center bg-cyan-100 w-[50vw]">
            <button 
            className='border p-2 rounded-xl'
            onClick={()=>dispatch(clearItems())}>Clear Items</button>
            <h1 className="font-bold text-4xl">Added Items</h1>
            <ul className='list-disc text-3xl font-semibold p-3'>
                {slicedData.map((item)=>{
                    return <li>{item.text} <span onClick={()=>{
                        dispatch(delelteItem(item.id))
                    }}>❌</span></li>
                })}
            </ul>
        </div>
    )
}