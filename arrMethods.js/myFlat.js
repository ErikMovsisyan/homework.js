Array.prototype.myFlat = function(depth) {
if(depth === undefined) {
    depth = 1;
}
let res = [];
for (let i = 0; i < this.length; ++i) {
    if (!(i in this)) {
        continue;
    }
    const elem = this[i];
    if(Array.isArray(element) && depth > 0) {
    res.push(...Array.prototype.myflat.call(element,depth - 1));
}
else {
    res.push(element);
}
}
return res;

}
