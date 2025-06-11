function myEvery(arr,callback)  {
    let bool = true;
    for(let i = 0; i < arr.length; i++) {
        if(!callback(arr[i], i, arr)) {
            bool = false;
        }
    }
    return bool;
}