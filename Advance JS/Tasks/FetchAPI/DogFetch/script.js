const api = "https://dog.ceo/api/breeds/image/random"


const btn = document.getElementById("btn")
const dogImg = document.getElementById("dogImage")

btn.addEventListener('click',()=>{
    const data = fetch(api)
    data
    .then((value)=>{
        return value.json()
    })
    .then((fData)=>{
        console.log(fData)
        dogImg.src = fData.message
    })
})