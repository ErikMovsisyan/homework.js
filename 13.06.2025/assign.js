const person1 = {
    name : "Erik",
    age : 21,
}
const person2 = {
    city : "YErevan",
    age : 22,
}
let mergedPerson = Object.assign({},person1,person2);
console.log(mergedPerson);