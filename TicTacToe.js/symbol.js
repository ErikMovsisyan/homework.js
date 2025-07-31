/*task1
let sym =  Symbol("new");
let sym2 = Symbol("new");
console.log(sym === sym2);
const obj = {};
obj[sym] = "new";
obj[sym2] = "new";
console.log(Object.keys(obj))
const symbol = Object.getOwnPropertySymbols(obj);
console.log(symbol);
*/
/*task2
const sym = Symbol.for("session");
const sym1 = Symbol.for("session");
console.log(sym === sym1);
console.log(Symbol.keyFor(sym));
console.log(Symbol.keyFor(sym1));
*/
/*task3
class AdminOnly {
    static [Symbol.hasInstance](obj) {
        return obj && obj.role === 'admin'
    }
}
const user1 = { name: "Anna", role: "admin" };
const user2 = { name: "Mark", role: "user" };
const user3 = { name: "Elen", role: "moderator" };
const user4 = { name: "Aram", role: "admin" };
console.log(user1 instanceof AdminOnly); 
console.log(user2 instanceof AdminOnly); 
console.log(user3 instanceof AdminOnly); 
console.log(user4 instanceof AdminOnly);
*/





