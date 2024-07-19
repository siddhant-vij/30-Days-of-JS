// Embedded Variables
const fName = "John";
const age = 30;
console.log(`Hello, my name is ${fName} and I am ${age} years old.`);

console.log("--------------------");

// Embedded Functions
const sum = (a, b) => a + b;
console.log(`The sum of 2 and 3 is ${sum(2, 3)}`);

console.log("--------------------");

// Embedded Objects
const person = {
  name: "John",
  age: 30,
};
console.log(`My name is ${person.name} and I am ${person.age} years old.`);

console.log("--------------------");

// Multiline Strings
console.log(`Hello, my name is ${person.name}.
I am ${person.age} years old.`);

console.log("--------------------");
