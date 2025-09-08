import { useState } from "react"

export function Input() {
    const [text, setText] = useState("")
    const [items, setItems] = useState([])

    return (
        <div className="grid grid-cols-2 ">
            <div className="border-2 rounded-xl m-4 p-4">
                <h2 className="font-extrabold text-2xl m-2 p-2">Add Names of Students</h2>
                <input value={text} onChange={(e) => { setText(e.target.value) }} className="m-2 p-3 border rounded-2xl" type="text" placeholder="Enter student name
                 !" />

                {/* <p>{text}</p> */}

                <button onClick={() => {
                    if (text.length > 0) {
                        setItems([text, ...items])
                        setText("")
                    }
                    console.log(items)
                }} className="border-2 bg-blue-600 text-white w-23 rounded-xl p-3 m-2">Add</button>

            </div>
            <div className="border-2 rounded-xl m-4 p-4 h-[83vh]">
                <h2 className=" font-extrabold text-2xl italic underline m-2 p-2">Shortlisted Students</h2>
                {items.length > 0 &&
                    <ul className="list-disc text-xl ml-8">
                        {items.map((i) => {
                            return <li>{i}</li>
                        })}
                    </ul>}
                        </div>
        </div>
    )
}