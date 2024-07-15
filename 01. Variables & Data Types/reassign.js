// Reassignment Demo

// Create a script that demostrates the difference in behaviour between let and const when it comes to reassignments

let myNum = 1;
const myStr = "Hello";
console.log(myNum, myStr);

myNum = 2;
// myStr = "World"; // TypeError: Assignment to constant variable.
console.log(myNum, myStr);
