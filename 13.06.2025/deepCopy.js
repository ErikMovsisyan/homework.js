function deepClone(obj) {
    if(obj === Null || typeof(obj) !== "object") {
        return obj;
    }
    const clonedObj = {};
    for(let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }
    return clonedObj;
}