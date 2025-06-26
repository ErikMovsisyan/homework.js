Array.prototype.myJoin = function(seperator) {
    let res = "";
    if(this.length === 0) {
        return res;
    }
    if (seperator === undefined)  {
        seperator = ",";
    }
    for (let i = 0; i < this.length; ++i) {
        res += this[i];
        if(i < this.length - 1) {
            res += seperator;
        }
    }
    return res;

}
let arr = ["monkey","Dog","cat"];
let arr2 = []
console.log(arr.join("+"))
console.log(arr.myJoin("+"))
