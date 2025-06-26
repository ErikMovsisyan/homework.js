Array.prototype.myUnshift = function() {
    for (let i = this.length; i >= 0; --i) {
        this[i + arguments.length] = this[i];
    }
    for(let i = 0; i < arguments.length; ++i) {
        this[i] = arguments[i];
    }
    return this.length;
}