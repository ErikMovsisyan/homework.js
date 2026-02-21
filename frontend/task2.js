function memoize(fn) {
    var cache = {};
    return function(n) {
        if (cache[n] !== undefined) {
            return cache[n];
        }
        var res = fn(n);
        cache[n] = res;
        return res;
    }
}