function traceFn(func) {
    function run() {
        var args = Array.prototype.slice.call(arguments, 0, func.length);
        var out = func.apply(this, args);

        run.history.push({
            args: args,
            output: out
        });

        return out;
    }

    run.history = [];
    return run;
}
