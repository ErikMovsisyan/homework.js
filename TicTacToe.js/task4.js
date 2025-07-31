class Employee {
    constructor(name,surname) {
        this.name = name;
        this.surname = surname;
    }
   getSalary() {
    throw new Error("method must be overriden");

   }
}
class FullTimeEmployee extends Employee {
    constructor(name,surname,monthlySalary) {
        super(name,surname);
        this.monthlySalary = monthlySalary;
    }
    getSalary() {
        return this.monthlySalary;
    }
}

class PartTimeEmployee extends Employee {
  constructor(name, hourlyRate, hoursWorked) {
    super(name);
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  getSalary() {
    return this.hourlyRate * this.hoursWorked;
  }
}

class Freelancer extends Employee {
  constructor(name, projectRate, projectsDone) {
    super(name);
    this.projectRate = projectRate;
    this.projectsDone = projectsDone;
  }

  getSalary() {
    return this.projectRate * this.projectsDone;
  }
}
const employees = [
  new FullTimeEmployee("Աննա", 500000),
  new PartTimeEmployee("Մարկ", 3000, 80),
  new Freelancer("Էլինա", 20000, 5),
  new PartTimeEmployee("Արամ", 4000, 60),
  new Freelancer("Սյուզի", 15000, 3)
];

for (const emp of employees) {
  console.log(`👤 ${emp.name} ստանում է աշխատավարձ՝ ${emp.getSalary()} ֏`);
}