
/* 

------------------------------ Sorting a Algorithm ------------------------------

let arr = [4,1,5,23,3,-12]

arr.sort() // it gives only lexographical order or Dictionary order...

arr.sort((a,b)=>{ return a-b})  // ascending order
arr.sort((a,b)=>{ return b-a})  // descending order
console.log(arr)

Counting frequency


let arr = [1,1,1,2,3,0,2,3,3,2,5]

let obj = {}

for(let item of arr){
    if(obj[item]){
        obj[item] = obj[item] + 1
    }else{
        obj[item] = 1
    }
}
console.log(obj)
*/

let str = 'satyamgupta'
let obj = {}

for(let i=0;i<str.length;i++){
    if(obj[str[i]]){
        obj[str[i]] = obj[str[i]] +1
    }else{
        obj[str[i]] =  1
    }
}
console.log(obj)