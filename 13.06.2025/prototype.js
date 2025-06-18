const Person = {
    name : "Erik",
    greet() {
        return `Hello ${this.name}`;
    }
}
const Student = Object.create(Person);
Student.name = "Suren";
Student.grade = 25;
Student.greet = function() {
    return `Hello ${this.name}, my grade is ${this.grade}`;
}
console.log(Student.greet())