Array.prototype.myFindIndex = function(callback) {
for(let i = 0; i < this.length; ++i) {
    if(callback(this[i])) {
        return i;
    }
}
return -1;
}