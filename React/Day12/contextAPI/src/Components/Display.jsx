import { useContext } from "react"
import { taskContext } from "../App"

export function Display(){
    const { tasks } = useContext(taskContext)

    return(
        <div className="flex flex-col bg-cyan-100 font-bold items-center justify-start h-[100vh] w-[50vw] p-6">
            <h1 className="text-2xl mb-6">Your Task List</h1>
            <div className="flex flex-col gap-4 w-full items-center">
                {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <div 
                            key={index} 
                            className="border rounded-2xl bg-white shadow-md w-[30vw] p-4 text-center"
                        >
                            <p className="text-xl text-gray-800">{task.title}</p>
                            <p className="text-sm text-gray-600 mt-2">{task.desc}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-700">No tasks added yet!</p>
                )}
            </div>
        </div>
    )
}
