import { useContext } from "react"
import { taskContext } from "../App"

export function Forms(){
    
    const{tasks,setTasks}= useContext(taskContext)
    return(
        <div className="flex flex-col bg-cyan-200 font-bold items-center justify-center  h-[100vh] w-[50vw]">
            
            <h1 className="text-2xl">Kindly Enter Some Tasks!</h1>
            
            <input onChange={(e)=>{
                setTasks(e.target.value)
            }}
            value={tasks} className="border m-6 p-2 rounded-lg font-bold w-[30vw]" type="text" placeholder="Enter Title" />
            
            <textarea onChange={()=>{

            }}
            className="border p-2 rounded-lg h-[20vh] w-[30vw]" name="textArea" placeholder="Enter the descriptions"></textarea>
            <button onClick={()=>{

            }}
            className="border w-[30vw] m-4 p-4 bg-black text-white rounded-full">Add Task</button>
        </div>
    )
}