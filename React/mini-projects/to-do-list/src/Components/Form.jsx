import { useContext, useState } from "react"
import { taskContext } from "../App"
import { v4 as uuid } from "uuid"

const Form = () => {
  const { tasks, setTasks } = useContext(taskContext)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  return (
    <div className="w-[50vw] h-screen flex items-center justify-center bg-gray-50">
      <div className="border border-gray-300 rounded-lg p-5 w-[380px] bg-white">
        <h2 className="text-xl font-bold text-gray-700 mb-3">Add Task</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          type="text"
          className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-400 outline-none"
        />

        <textarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Task description"
          className="w-full px-3 py-2 mb-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-400 outline-none resize-none h-24"
        ></textarea>

        <button
          onClick={() => {
            if (title.trim().length === 0 || desc.trim().length === 0) {
              alert("Please fill all the fields")
              return
            }
            setTasks([...tasks, { title, desc, id: uuid() }])
            setTitle("")
            setDesc("")
          }}
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
    </div>
  )
}

export default Form
