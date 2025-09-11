import React, { useContext } from 'react'
import { taskContext } from '../App'

const Display = () => {
  const { tasks, setTasks } = useContext(taskContext)

  return (
    <div className="w-[50vw] min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-[450px] border border-gray-300 rounded-lg p-5 bg-white">
        <h2 className="text-xl font-bold text-gray-700 mb-4">Task List</h2>

        {tasks.length === 0 ? (
          <p className="text-gray-500 text-sm">No tasks added yet.</p>
        ) : (
          <div className="space-y-3">
            {tasks.map((item) => (
              <div
                key={item.id}
                className="p-3 flex justify-between items-start border border-gray-200 rounded-md bg-gray-50"
              >
                <div>
                  <p className="text-base font-medium text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>

                <button
                  onClick={() => {
                    const filteredArray = tasks.filter((i) => i.id !== item.id)
                    setTasks(filteredArray)
                  }}
                  className="bg-red-500 text-white px-2 py-1 text-sm rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Display
