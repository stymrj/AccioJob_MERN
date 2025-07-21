/*



// let arr = [23,45,12,3,-54,5,75,234]
function mergeSortedArray(arr1, arr2){
    let res = []
    let i = 0, j=0
    while(i<arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            res.push(arr1[i])
            i++
        }else{
            res.push(arr2[j])
            j++
        }
    }

    while(i<arr1.length){
        res.push(arr1[i])
        i++
    }

    while(j<arr2.length){
        res.push(arr2[j])
        j++
    }
    return res
}


function mergeSort(arr){
    if(arr.length == 1){
        return arr
    }
    let mid = Math.floor((0+arr.length)/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    return mergeSortedArray(left,right)
}

let ans = mergeSort([23,45,12,3,-54,5,75,234])
console.log(ans)


*/