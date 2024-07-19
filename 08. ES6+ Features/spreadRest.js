// Spread operator to combine two arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // [1, 2, 3, 4, 5, 6]

console.log("--------------------");

// Spread operator to combine two objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // {a: 1, b: 2, c: 3, d: 4}

console.log("--------------------");

// Rest operator to handle multiple arguments
const sum = (...args) => {
  return args.reduce((acc, num) => acc + num, 0);
};
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55

console.log("--------------------");
