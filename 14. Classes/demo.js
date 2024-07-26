// A demo to understand the basics of classes and objects using a Person class with properties and methods.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const person = new Person("John", 15);
person.greet();

// Output: Hello, my name is John and I am 15 years old.

// A class Student which inherits from Person, overrides the greet method and adds a grade property.

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old. I am in grade ${this.grade}.`
    );
  }
}

const student = new Student("John", 15, 9);
student.greet();

// Output: Hello, my name is John and I am 15 years old. I am in grade 9.
