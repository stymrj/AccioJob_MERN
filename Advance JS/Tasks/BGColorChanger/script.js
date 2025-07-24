
const btn = document.getElementById("btn")



// setInterval(()=>{
//     let r = Math.floor(Math.random()*256)
//     let g = Math.floor(Math.random()*256)
//     let b = Math.floor(Math.random()*256)

//     let finalColor = `rgb(${r},${g},${b})`

//     console.log(finalColor)

//     document.body.style.backgroundColor = finalColor;
    
// },1000)

btn.addEventListener('click',()=>{
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)

    let finalColor = `rgb(${r},${g},${b})`

    console.log(finalColor)

    document.body.style.backgroundColor = finalColor;
    
})

