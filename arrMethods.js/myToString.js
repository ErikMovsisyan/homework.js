Array.prototype.myToString = function() {
    let res = "";
    for(let i = 0; i < this.length; ++i) {
        res += this[i];
        if (i < this.length - 1) {
            res += ",";
        }
    }
    return res;
}
let arr = [3,4,5,6];
console.log(arr.toString());
console.log(arr.myToString())