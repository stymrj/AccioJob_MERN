
const inputbar = document.getElementById("input")

function inputHandler(e){
    console.log("API called for: " + e.target.value)
}

function debounce(fn, timer){
    let timeoutID = null
    return (e)=>{
        clearTimeout(timeoutID)
        timeoutID = setTimeout(()=>{
            fn(e)
        },timer)
    }
}

const debouncedInputHandler = debounce(inputHandler,500)

inputbar.addEventListener("input", debouncedInputHandler)