const obj = {
    name : "Erik",
    surname : "Movsisyan",
    age : 25,

}
const entries = Object.entries(obj);
const filteredEntries = entries.filter(([key, value]) => typeof value === "number" && value > 20);
const filteredObj = Object.fromEntries(filteredEntries);

console.log(filteredObj);

