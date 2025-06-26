Array.prototype.myLastIndexOf = function(searchElement,fromIndex) {
    if(fromIndex === undefined || fromIndex >= this.length) {
        fromIndex = this.length - 1;
    }
    if (fromIndex < 0) {
        fromIndex = Math.max(fromIndex + this.length, 0)
    }
    for(let i = fromIndex; i >= 0; --i) {
        if(this[i] === searchElement)
            return i;
    }
return -1;

}
let arr = [1,2,3,4]
console.log(arr.myLastIndexOf(2,-1))