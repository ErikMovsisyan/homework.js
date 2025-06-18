function Person(name) {
  this.name = name;
}

const Student = Object.create(Person);
console.log(Student instanceof Person)