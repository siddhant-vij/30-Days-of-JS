// Default Parameters Demo

function add1(a, b, c = 0) {
  return a + b + c;
}

console.log(add1(1, 2)); // 3
console.log(add1(1, 2, 3)); // 6

console.log("--------------------");

function add2(a = 0, b = 0, c = 0) {
  return a + b + c;
}

console.log(add2()); // 0
console.log(add2(1, 2)); // 3
console.log(add2(1, 2, 3)); // 6

console.log("--------------------");
