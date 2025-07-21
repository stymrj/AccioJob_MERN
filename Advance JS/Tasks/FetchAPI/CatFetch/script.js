const api = "https://api.thecatapi.com/v1/images/search"
const btn = document.getElementById("btn")
const pImg = document.getElementById("pussy-img")

btn.addEventListener("click",()=>{

const data = fetch(api)
data
.then((val)=>{
    let ans = val.json()
    return ans
})
.then((finalData)=>{
    console.log(finalData)
    pImg.src = finalData[0].url
})

})

