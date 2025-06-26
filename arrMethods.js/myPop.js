Array.prototype.myPop = function() {
    if(this.length === 0) {
        return undefined;
    }
    let returnedValue = this[this.length - 1];
    this[this.length - 1] = undefined;
    this.length -= 1;
    return returnedValue;
}
const arr = [2,3,4,5];
console.log(arr.myPop())
console.log(arr)