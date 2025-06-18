const Student = {
    name : "Erik",
    age : 21,
    grade : 90,
}
Object.freeze(Student);
console.log(Student);
Student.age = 23;
console.log(Student)