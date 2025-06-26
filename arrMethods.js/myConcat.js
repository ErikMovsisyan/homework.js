Array.prototype.myConcat = function() {
let res = [];
let index = 0;
for(let i = 0; i < this.length; ++i) {
    res[index++] = this[i];
}
for(let i = 0; i < arguments.length; ++i) {
   if(Array.isArray(arguments[i])) {
     for (let j = 0; j < arguments[i].length; ++j) {
        res[index++] = arguments[i][j]
     }
   } else {
   res[index++] = arguments[i];
}
}
return res;

}
let arr1 = [3,4,5]
let arr2 = [6,8,9]
console.log(arr1.myConcat(arr2))
console.log(arr1.concat(arr2))