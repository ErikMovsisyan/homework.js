function curry(fn) {
    return function curried() {
        var args = Array.prototype.slice.call(arguments);

        if (args.length >= fn.length) {
            return fn.apply(this, args)
        }

        return function() {
            var newArgs = args.concat(Array.prototype.slice.call(arguments));
            return curried.apply(this, newArgs);
        }
    }
}
