Array.prototype.myFindLast = function(callback) {
for(let i = this.length - 1; i >= 0; --i) {
    if(callback(this[i])) {
        return this[i];
    }
}
return undefined;
}
let arr = [1,2,3,4,5,6]
console.log(arr.myFindLast((element) => element >= 3))