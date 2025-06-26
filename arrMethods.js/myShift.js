Array.prototype.myShift = function() {
    if(this.length === 0) {
        return undefined;
    }
    let returnValue = this[0];
    for(let i = 0; i < this.length -1; ++i) {
        let tmp = this[i];
        this[i] = this[i+1];
        this[i+1] = tmp;
    }
    this[this.length - 1] = undefined;
    this.length -= 1;
    return returnValue;

}
let arr = [1,2,3,4,5]
console.log(arr.myShift())
console.log(arr)