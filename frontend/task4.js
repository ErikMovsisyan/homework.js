// variant 1
const pipe = (...fns) => (value) =>
  fns.reduce((acc, fn) => fn(acc), value);
// 2
function pipe() {
    var fns = Array.prototype.slice.call(arguments);

    return function(value) {
        return fns.reduce(function(acc, fn) {
            return fn(acc);
        }, value);
    };
}
