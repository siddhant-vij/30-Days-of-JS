// Variable Types Console Log

// Write a script that declares variable of different data types in JS and log both the values and type of each variable to the console

let myNum = 1;
let myStr = "Hello";
let myBool = true;
let myObj = {
  name: "Temp",
  age: 30,
};
let myArr = [1, 2, 3];
let myNull = null;
let myUndefined = undefined;
let mySymbol = Symbol("mySymbol");
let myBigInt = BigInt("1234567890123456789012345678901234567890");

console.log(myNum, typeof myNum);
console.log(myStr, typeof myStr);
console.log(myBool, typeof myBool);
console.log(myObj, typeof myObj);
console.log(myArr, typeof myArr);
console.log(myNull, typeof myNull); // null is an object
console.log(myUndefined, typeof myUndefined);
console.log(mySymbol, typeof mySymbol);
console.log(myBigInt, typeof myBigInt);