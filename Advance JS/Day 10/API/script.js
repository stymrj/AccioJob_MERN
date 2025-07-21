
const api = "https://hp-api.onrender.com/api/characters"

let data = fetch(api)

data
.then((val)=>{
    let ans = val.json()
    return ans
})
.then((finalAns)=>{
    console.log(finalAns)
})