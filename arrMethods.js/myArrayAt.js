Array.prototype.myAt = function(index) {
    if(index >= this.length) {
        return undefined
    }
    if(index === undefined) {
        return this[0];
    }  
    if(index < 0) {
        index = this.length + index;
        return this[index]
    }
    return this[index];  
    
}


const arr = [1,2,3,4,5];
console.log(arr.at(-2))
console.log(arr.myAt(-2))