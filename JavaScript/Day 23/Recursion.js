/*
-------------------------- Recursion ---------------------------------------
>>> Calculating Power of N

function xPowN(x,n){
    //base case
    if(n==0){
        return 1
    }
    //small problem
    return x * xPowN(x,n-1)
}

console.log(xPowN(2,5))



* 
* * 
* * * 
* * * * 
* * * * * 


Method-1

function pattern(n){
    //base case
    if(n==0){
        return 
    }
    pattern(n-1)
    let str = ''
    for(let i=1;i<=n;i++){
        str += '* '
    }
    //small problems
    console.log(str)
}
console.log(pattern(5))



function pattern(n){
    //base case
    if(n==0){
        return 
    }
    pattern(n-1)
    console.log('* '.repeat(n))
}
console.log(pattern(5))

-----------------------------------------------------------------------------

5
4
3
2
1
1
2
3
4
5



function pattern(n){
    //base case
    if(n==0){
        return
    } 
    //small problem
    console.log(n)
    pattern(n-1)
    console.log(n)
}

console.log(pattern(5))


-----------------------------------------------------------------------------


function multiply(n,m){
    //base case
    if(m==0){
        return 0
    }
    //small problem
    return n + multiply(n,m-1)
}

console.log(multiply(15,12))



5 4 3 2 1 


function printTillN(n,str){
    //base case
    if(n==0){
        console.log(str)
        return
    }
    //small problem
    str += n + ' '
    printTillN(n-1,str)
}
console.log(printTillN(5,''))

*/

let arr1 = [1,7,9,13,41]
let arr2 = [2,8,11,12]
let arr3 = []
let i=0, j=0

while(i < arr1.length && j <arr2.length){
    if(arr1[i]<arr2[j]){
        arr3.push(arr1[i])
        i++
    }else{
        arr3.push(arr2[j])
        j++
    }
}
if(i<arr1.length){
    for(let k=i;k<arr1.length;k++){
        arr3.push(arr1[k])
    }

}
if(j<arr2.length){
    for(let l=j;l<arr2.length;l++){
        arr3.push(arr2[l])
    }
}
console.log(arr3)