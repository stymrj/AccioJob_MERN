/*
let p1 = new Promise((resolve,reject)=>{
    const data = true //resolve state
    //const data = false //reject state
    if(data==true){
        resolve("Promise Resolved")
    }else{
        reject("Promise Rejected")
    }
})
console.log(p1)


//pending state
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("SetTimeOutDone!")
    },5000)
})
console.log(p2)



let p3 = new Promise((resolve,reject)=>{
   let data = true 
    let arr = [{name:"shivam"},{name:"sundram"},{name:"satyam"}]
    if(data){
        resolve(arr)
    }else{
        reject("Rejected")
    }
})

console.log(p3)

p3
.then((d)=>{
    console.log(d)
})
.catch(()=>{
    console.log("Rejected...")
})




let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([1,2,3,4,5])
    },5000)
})

// console.log(p1)

p1
.then((arr)=>{
    console.log(arr)
})



const api = "https://hp-api.onrender.com/api/characters"

const val = fetch(api)

val
.then((data)=>{
    let ans = data.json()
    return ans
})
.then((finalData)=>{
    console.log(finalData)
})


*/