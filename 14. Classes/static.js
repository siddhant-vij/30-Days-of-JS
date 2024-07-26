// A demo to understand the basics of static keyword in classes.

class Employee {
  static numberOfEmployees = 0;
  constructor(name, age) {
    this.name = name;
    this.age = age;

    Employee.numberOfEmployees++;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  static getNumberOfEmployees() {
    return Employee.numberOfEmployees;
  }
}

const employee1 = new Employee("John", 15);
employee1.greet();

console.log(Employee.getNumberOfEmployees());

const employee2 = new Employee("Jane", 20);
employee2.greet();

const employee3 = new Employee("Bob", 25);
employee3.greet();

const employee4 = new Employee("Alice", 30);
employee4.greet();

console.log(Employee.getNumberOfEmployees());
