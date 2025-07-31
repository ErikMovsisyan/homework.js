class Person {
    #age;
    constructor(name,age) {
        this.name = name;
        this.#age = age
    } 
    set_age(age) {
        if(age < 0) {
            throw new Error("error");
        }
        this.#age = age
    }
    get_age() {
        return this.#age
    }

}
class Student extends Person {
    constructor(name,age,studentID) {
        super(name,age);
        this.studentID = studentID;
    }
    get_info() {
        return `${this.name}; ${this.get_age()}; ${this.studentID}`
    }
}
const p = new Student("erik",21,"0503")
console.log(p)
console.log(p.get_info())
p.set_age(4)
console.log(p.get_info())
console.log(typeof p.get_info())