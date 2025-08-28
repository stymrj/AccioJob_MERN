import { useState } from "react"

const Demo = () => {
    const [showSideBar, setSideBar] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [val, setVal] = useState("")


    return (
        <>
            <div className="flex justify-end h-10 text-3xl px-6"> Change Mode!

                {/* <button onClick={()=>{
                    setDarkMode(true)
                }}>🌚</button>
                <button onClick={()=>{
                    setDarkMode(false)
                }}>🌞</button>

                <button onClick={()=>{
                    setDarkMode(!darkMode)
                }}>Toggle</button>
 */}

                <button onClick={() => {
                    setDarkMode(!darkMode)
                }}>{darkMode ? "🌞" : "🌚"}</button>

            </div>

            <div className="flex">
                <div
                    onMouseLeave={() => {
                        setSideBar(false)
                    }}

                    onMouseEnter={() => {
                        setSideBar(true)
                    }} className={'border bg-cyan-300 h-[100vh] ' + (showSideBar ? "w-[20vw]" : "w-[5vw]")}>SideBar</div>

                    
                <div className={"border h-[100vh] w-[95vw] " + (darkMode ? "bg-black" : "bg-white")} >
                    Main Page
                    <div className="p-5">
                        <input                         
                        onChange={(e) => {
                            setVal(e.target.value)
                        }} type="text" placeholder="Enter Your Name..." />
                        <h1 className="text-xl p-5">Welcome {val}!</h1>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Demo