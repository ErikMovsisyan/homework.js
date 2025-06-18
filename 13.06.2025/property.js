let keys = ["name","age"];
let values = ["Erik",21];
let Student = {};
for(let i = 0; i < keys.length; ++i)   {
    Student[keys[i]] = values[i];
}
console.log(Student)