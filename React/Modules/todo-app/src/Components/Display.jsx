import { useSelector } from 'react-redux'

function Display(){
    const data = useSelector((s)=>{
        return s.todoApp
    })
    return(
        <div className='flex justify-center items-center w-[50vw]'>
            <ul>
                {data.map((item)=>{
                    return <li>{item}</li>
                })}
            </ul>
        </div>
    )
}
export default Display