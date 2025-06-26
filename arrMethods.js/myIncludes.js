Array.prototype.myIncludes = function(searchElement,fromIndex) {
    if(fromIndex >= this.length)    {
        return false;
    }
    if (fromIndex === undefined) {
        fromIndex = 0;
    }
    if (fromIndex < 0) {
        fromIndex = this.length + fromIndex;
        }
        for (let i = fromIndex; i >= 0; ++i) {
            if(this[i] == searchElement) {
                return true;
            }
        }
        return false;
    }
    
    
const arr =  [1,2,3,4,5]
console.log(arr.includes(5,-3));
console.log(arr.myIncludes(5,-3))

