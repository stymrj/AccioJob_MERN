function Input({ text, setText }) {

    const handleValue = (index,value) => {
        const newText = [...text]
        newText[index] = value
        setText(newText)
    }
    return (
        <div className="flex flex-col gap-4 justify-center items-center h-[90vh] w-[50vw] border-2 m-6 rounded-2xl bg-yellow-200">
            <p className="text-3xl font-extrabold mb-9">Kindly Enter Some Info</p>

            <input onChange={(e) => {
                (handleValue(0,e.target.value))
            }} value={text[0]} type="text" placeholder="Enter your name" className="border p-2 text-2xl rounded-xl" />
            

            <input onChange={(e) => {
                (handleValue(1,e.target.value))
            }} value={text[1]} type="text" placeholder="Enter your sex" className="border p-2 text-2xl rounded-xl" />
            
            
            <input onChange={(e) => {
                (handleValue(2,e.target.value))
            }} value={text[2]} type="text" placeholder="Enter your age" className="border p-2 text-2xl rounded-xl" />
            
            
            <input onChange={(e) => {
                (handleValue(3,e.target.value))
            }} value={text[3]} type="text" placeholder="Enter your loaction" className="border p-2 text-2xl rounded-xl" />

        </div>
    )
}

export default Input