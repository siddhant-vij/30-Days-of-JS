// Activity 1: Arithmetic Operatioions

// Task 1 to 5: Add, Subtract, Multiply, Divide, Remainder

const calculate = (a, b) => {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;
  const remainder = a % b;
  return [add, subtract, multiply, divide, remainder];
};

const a = 5;
const b = 2;
// console.log("Add:", calculate(a,b)[0]);
// console.log("Subtract:", calculate(a,b)[1]);
// console.log("Multiply:", calculate(a,b)[2]);
// console.log("Divide:", calculate(a,b)[3]);
// console.log("Remainder:", calculate(a,b)[4]);


// Activity 2: Assignment Operators

// Task 6 to 7: Use the += & -= operators to add or subtract from a variable

let myNum1 = 1;
myNum1 += 2; // myNum = myNum + 2
// console.log(myNum);
myNum1 -= 3; // myNum = myNum - 3
// console.log(myNum);


// Activity 3: Comparison Operators

// Task 8 to 10: Use the ==, ===, !=, !==, >, <, >=, and <= operators to compare values

let myNum2 = 1;
let myNum3 = "1";
// console.log(myNum2 == myNum3); // true
// console.log(myNum2 === myNum3); // false
// console.log(myNum2 != myNum3); // false
// console.log(myNum2 !== myNum3); // true
// console.log(myNum2 > myNum3); // false
// console.log(myNum2 < myNum3); // false
// console.log(myNum2 >= myNum3); // true
// console.log(myNum2 <= myNum3); // true


// Activity 4: Logical Operators

// Task 11 to 13: Use the &&, ||, and ! operators to combine conditional statements

let myNum4 = 1;
let myNum5 = 2;
// console.log(myNum4 > myNum5 && myNum4 < myNum5); // false
// console.log(myNum4 > myNum5 || myNum4 < myNum5); // true
// console.log(!(myNum4 > myNum5)); // true


// Activity 5: Ternary Operator

// Task 14: Use the ternary operator to simplify an if-else statement - check if number is positive or negative

let myNum6 = -10;
console.log(myNum6 > 0 ? "positive" : "negative");