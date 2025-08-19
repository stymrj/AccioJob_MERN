const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(["Ant","Bat","Cat","Dog"])
    },2000)
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject("Promise2 fails in getting data")
        resolve([1,2,3,4,5,6])
    },2000)
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([{id:1},{id:2},{id:3}])
    },2000)
})


const p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello guys!!")
    },2000)
})

/*
Till now if we have to work on these promises we were doing this 

p1.then(()=>{})
p2.then(()=>{})
p3.then(()=>{})
p4.then(()=>{})

But now we have some methods on Promises to resolve this  

1. Promise.all([]) >> takes input as an Array of promise and also return a promise

*/

Promise.all([p1,p2,p3,p4])
.then(()=>{
    console.log("All Promises has been Resolved..")
})

Promise.all([p1,p2,p3,p4])
.then((...arr)=>{
    for(let item of arr){
        console.log(item)
    }
})
.catch((err)=>{
    console.log(err)
})

//allSettled
Promise.allSettled([p1,p2,p3,p4])
.then((data)=>{
    console.log(data)
})

//race
Promise.race([p1,p2,p3,p4])
.then((data)=>{
    console.log(data)
})

