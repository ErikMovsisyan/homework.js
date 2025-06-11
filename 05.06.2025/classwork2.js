function concatt(arr1,arr2) {
    let result = []
    for(let i = 0; i < arr1.length+arr2.length ; ++i)   {
if(i < arr1.length) {
    result.push(arr1[i])
    continue;
}
result.push(arr2[i - arr1.length])

    }
    return result


}
console.log(concatt([1,2,3],[4,6,7]))