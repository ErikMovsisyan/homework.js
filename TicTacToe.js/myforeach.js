Array.prototype.myforeach = function(callback,thisArgs) {
    for(let i = 0; i < this.length; ++i) {
        callback.call(thisArgs,this[i],i,this)
    }

}
const letters = ['a', 'b', 'c'];

letters.myforeach(function(letter, index) {
  console.log(`${index}: ${letter}`);
});
