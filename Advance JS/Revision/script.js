/*

let n = prompt("Enter Value of N ")
let stars = n
let spaces = 0

for(let i=1;i<=n;i++){

    let str = ''
    // for spaces
    for(let i=1;i<=spaces;i++){
        str += "  "
    }
    // for stars 
    for(let j=1;j<=stars;j++){
        str += "* "
    }

    console.log(str)

    if(i<=n/2){
        spaces++
        stars -= 2
    }else{
        spaces--
        stars += 2
    }
}



let n = 5

for(let i=0;i<n;i++){
    let str = ""
    for(let j=0;j<=i;j++){
        if(j%2==0){
            str += "1 "
        }else{
            str += "0 "
        }
    }
    console.log(str)
}




let n = 5
let v = 1

for(let i=1;i<=n;i++){
    let str = ""
    for(let j=1;j<=i;j++){
        str += v + " "
        v==1 ? v = 0 : v = 1
    }
    console.log(str)
}

*/

//squares of the elements of array
let arr = [1,2,3,4,5,6,7,8,9,10]
const ans = arr.map((i)=>{
    return i*i
})
console.log(ans)


//finding even elements
const ans2 = arr.filter((i)=>{
    return i%2==0
})
console.log(ans2)

//checking whether 10 is present
const ans3 = arr.find((e)=>e==8)
console.log(ans3)

