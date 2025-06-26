Array.prototype.myPush = function() {
for(let i = 0; i < arguments.length; ++i) {
    this[this.length] = arguments[i];
    
}
return this.length
}
let arr = [2,3,4,5]
console.log(arr.myPush(8,9))
console.log(arr)