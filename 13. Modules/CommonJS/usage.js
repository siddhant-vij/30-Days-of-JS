const { calculator, greetings } = require("./module");

console.log(calculator(1, 2, "+")); // 3
console.log(calculator(1, 2, "-")); // -1
console.log(calculator(1, 2, "*")); // 2
console.log(calculator(1, 2, "/")); // 0.5
console.log(calculator(1, 2, "%")); // 1

console.log(greetings("John")); // Hello, John!