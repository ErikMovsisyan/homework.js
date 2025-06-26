Array.prototype.myReduce = function(callback,initialValue) {
let acc = initialValue;
let startIndex = 0;
if(acc === undefined) {
    if (this.length === 0) {
       throw new Error("error");
       
       
    }
    acc = this[0];
startIndex = 1;
}

for (let i = startIndex; i < this.length; ++i) {
    acc = callback(acc, this[i])
}
return acc;
}

const arr = [1,2,3,4]
console.log(arr.myReduce((a,b) => a+b,4,))