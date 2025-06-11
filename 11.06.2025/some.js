function mySome(arr,callback)   {
    let bool = false;
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i],i,arr))  {
            bool = true;
        }
    }
    return bool;
}