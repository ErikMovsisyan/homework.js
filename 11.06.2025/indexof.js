function myIndexOf(arr,searchElement,fromIndex)    {
if(fromIndex < 0) fromIndex = arr.length + fromIndex;
if(fromindex < 0) fromIndex = 0;
for(let i = 0; i < fromIndex; i++)  {
    if(arr[i] === searchElement)    {
        return i;
    }
}
return -1;
}







