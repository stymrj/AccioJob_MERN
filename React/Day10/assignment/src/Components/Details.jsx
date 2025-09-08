export function Details({data,setData}){
    const dataHandler = (idx,value)=>{
        const newData = [...data]
        newData[idx] = value
        setData(newData)
    }

    return(
        <div className='flex flex-col justify-center gap-3 items-center  h-[90vh] w-[100vw] p-4 m-4'>
            <h1 className="text-4xl mb-5">Welcome to the <span className="text-red-600 font-extrabold">CareerGrid!</span></h1>
    
            
            <input 
            onChange={(e)=>(
                dataHandler(0,e.target.value)
            )}
            value = {data.name} type="text" placeholder="Enter your Name" className="border-2 rounded-xl p-3 w-[30vw]"/>
            
            
            <input 
            onChange={(e)=>(
                dataHandler(1,e.target.value)
            )}
            value = {data.name}
            type="text" placeholder="Enter your Email" className="border-2 rounded-xl p-3 w-[30vw]"/>
            
            
            <input 
            onChange={(e)=>(
                dataHandler(2,e.target.value)
            )}
            value = {data.name}
            type="text" placeholder="Enter your Phone" className="border-2 rounded-xl p-3 w-[30vw]"/>
            
            
            <input 
            onChange={(e)=>(
                dataHandler(3,e.target.value)
            )}
            value = {data.name}
            type="text" placeholder="Enter your Location" className="border-2 rounded-xl p-3 w-[30vw]"/>
            
            
            <input 
            onChange={(e)=>(
                dataHandler(4,e.target.value)
            )}
            value = {data.name}
            type="text" placeholder="Enter your Degree" className="border-2 rounded-xl p-3 w-[30vw]"/>
            <button onClick={()=>{
                alert("Thanks for providing your informations")
            }} className="h-[10vh] w-[10vw] border font-bold text-xl mt-9 rounded-3xl bg-black text-white">Submit</button>
            
        </div>
    )
}