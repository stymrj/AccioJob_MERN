let arr = [1,2,3,4,5,6,7,8,9,10]

// MAP
// Non Destructive

const data = arr.map((item)=>{ //return so stored in a variable
    return item ** 2
})


const data2 = arr.map((item)=>{
    return item%2==0?"EVEN":"ODD"
})

console.log(arr)
console.log(data)
console.log(data2)

let aar = [1,2,3,4,5,6,7,8,9,10]

const res = aar.map((item)=>{
    return item %2 == 0
})
const res2 = aar.filter((item)=>{
    return 
})


/*--------------------------------------------------------------------------- */
// Filter


let arr2 = [1,2,6,3,67,2324,899,23546,24678,3578,753]


const data3 = arr2.filter((item)=>{
    return item%3==0 // returns only when true 
})
console.log(data3)



const data4 = arr2.filter(()=>{
    // return true 
    return false //emptyy as always false
})
console.log(data4)

/* Odd Number Returning */
const data5 = arr2.filter((item)=>{
    return item%2 != 0
})
console.log(data5)

/*--------------------------------------------------------------------------- */


// REDUCE 

let arr3 = [1,2,3,4,5,6,7,8,9,10]

let sum = arr3.reduce((acc,curr)=>{
    return acc+curr
})

let sum2 = arr3.reduce((acc,curr)=>{
    return acc+curr
},20) // initialize acc value as 20

console.log(sum)
console.log(sum2)


let arr4 = ['a','e','i','o','u']

const ans = arr4.reduce((acc,curr)=>{
    return acc+curr
})

console.log(ans)



let nums = [11, 24, 7, 89, 3]

const max = nums.reduce((acc,curr)=>{
    return curr>acc?curr:acc
})
console.log(max)




// filter

// let arr = [1,4,5,33,12,90,66,45]
// let names = ["Akash", "Sumit", "Harsh", "Priyanshu", "Yug", "Om"]

// const nums = arr.filter((item) => {
//     // return item % 3 == 0
//     // return true
//     return false
// })

// const nums2 = arr.filter((item) => {
//     return item % 2 != 0
// })

// const n = names.filter((item) => {
//     return item.includes("a")
// })

// console.log(nums)
// console.log(nums2)
// console.log(n)




// reduce
// let arr = [1,2,3,4,5]
// let sum = arr.reduce((acc, curr) => {
//     return acc + curr
// }, 10)
// console.log(sum)

// let arr2 = ["a","e","i","o","u"]
// let str = arr2.reduce((acc, curr) => {
//     return acc + curr
// })
// console.log(str)


// let arr3 = [3,4,5,6,7]
// let ans = arr3.reduce((acc, curr) => {
//     return acc * curr
// })
// console.log(ans)






// indexes


// let arr = [11,12,13,14,15,16]

// let a1 = arr.map((item, index) => {
//     // console.log(item, index)
//     return index * 3
// })

// console.log(a1)


// let a2 = arr.filter((item, index) => {
//     return index % 2 == 0
// })

// console.log(a2)



// const users = [
//   {
//     id: 1,
//     name: "Aarav Mehta",
//     email: "aarav.mehta@example.com",
//     age: 28,
//     city: "Mumbai"
//   },
//   {
//     id: 2,
//     name: "Sara Kapoor",
//     email: "sara.kapoor@example.com",
//     age: 34,
//     city: "Delhi"
//   },
//   {
//     id: 3,
//     name: "Rohan Das",
//     email: "rohan.das@example.com",
//     age: 30,
//     city: "Bangalore"
//   },
//   {
//     id: 4,
//     name: "Priya Nair",
//     email: "priya.nair@example.com",
//     age: 27,
//     city: "Chennai"
//   },
//   {
//     id: 5,
//     name: "Kabir Sharma",
//     email: "kabir.sharma@example.com",
//     age: 32,
//     city: "Kolkata"
//   }
// ];

// let ans = users.find((item) => {
//     return item.age > 30
// })

// console.log(ans)


// let ans = users.filter((item) => {
//     return item.age > 30
// })

// console.log(ans)




// let arr = [9,6,4,1,8,2]


// arr.forEach((item, index) => {
//     console.log(item ** 2, index)
// })


// "qwerty".forEach((item) => {
//     console.log(item)
// })


for(let item of "qwertyu")
{
    console.log(item)
}