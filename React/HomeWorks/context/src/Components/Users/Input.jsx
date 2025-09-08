export function Input({val,setVal}){
    const dataHandler =(idx,value)=>{
        const newData = [...val]
        newData[idx] = value
        setVal(newData)
    }  
    return(
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <h1 className="text-4xl font-extrabold mb-9">Welcome to <span className="text-red-600">CareerGrid!</span> </h1>
            <div className="flex flex-col gap-3">
                
                <input onChange={(e)=>(
                    dataHandler(0,e.target.value))
                    } value={val[0]} className="border p-2 text-2xl rounded-lg w-[30vw]" type="text" placeholder="Enter your Name" />
                
                <input onChange={(e)=>(
                    dataHandler(1,e.target.value))
                    } value={val[1]} className="border p-2 text-2xl rounded-lg w-[30vw]" type="text" placeholder="Enter your Email" />
                
                <input onChange={(e)=>(
                    dataHandler(2,e.target.value))
                    } value={val[2]} className="border p-2 text-2xl rounded-lg w-[30vw]" type="text" placeholder="Enter yourLocation" />
                
                <input onChange={(e)=>(
                    dataHandler(3,e.target.value))
                    } value={val[3]} className="border p-2 text-2xl rounded-lg w-[30vw]" type="text" placeholder="Enter your Course" />
            </div>
        </div>
    )
}