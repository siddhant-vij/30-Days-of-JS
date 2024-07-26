// A demo to understand the getter and setter in classes.

class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
  }

  get fullName() {
    return `${this.fName} ${this.lName}`;
  }

  set fullName(name) {
    const [fName, lName] = name.split(" ");
    this.fName = fName;
    this.lName = lName;
  }
}

const person = new Person("John", "Doe");
console.log(person.fullName); // Output: John Doe

person.fullName = "Jane Doe";
console.log(person.fullName); // Output: Jane Doe
