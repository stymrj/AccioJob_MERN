import { useState } from "react"
import { HW3 } from "./HW3"

export function ShowHideDiv() {
    const [sideBar, setSideBar] = useState(false)
    return (
        <div>


            {/* side bar */}

            <div className="flex">
                <div
                    onMouseLeave={() => {
                        setSideBar(false)
                    }}
                    onMouseEnter={(() => {
                        console.log("entered")
                        setSideBar(true)
                    })}
                    className={"border flex justify-center items-center m-2 h-[85vh] " + (sideBar ? "w-[20vw]" : "w-[10vw]")}>
                        <h1 className="text-2xl font-bold [writing-mode:vertical-rl] rotate-180">S I D E B A R</h1>
                </div>

                {/* main page */}

                <div className="border h-[85vh] w-[90vw] m-2 flex flex-col justify-center">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4  w-[97%] h-[95%] m-4">
                        <div className="border-1 flex justify-center items-center text-4xl italic bg-cyan-200">
                            {/* <HW3 /> */}
                        </div>
                        <div className="border-1 flex justify-center items-center text-4xl italic bg-cyan-200">Box</div>
                        <div className="border-1 flex justify-center items-center text-4xl italic bg-cyan-200">Box</div>
                        <div className="border-1 flex justify-center items-center text-4xl italic bg-cyan-200">Box</div>
                    </div>
                </div>
            </div>
        </div>
    )
}