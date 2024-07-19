// Destructure an array
const arr = [1, 2, 3, 4, 5];
const [a, b, ...rest] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

console.log("-------------------");

// Destructure an object
const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const { a: a1, b: b1, ...rest1 } = obj;
console.log(a1); // 1
console.log(b1); // 2
console.log(rest1); // {c: 3, d: 4, e: 5}

console.log("-------------------");

// Destructure a nested object
const nestedObj = { a: 1, b: { c: 2, d: 3 } };
const {
  a: a2,
  b: { c: c2, d: d2 },
} = nestedObj;
console.log(a2); // 1
console.log(c2); // 2
console.log(d2); // 3

console.log("-------------------");

// Destructure a nested array
const nestedArr = [1, [2, 3]];
const [a3, [c3, d3]] = nestedArr;
console.log(a3); // 1
console.log(c3); // 2
console.log(d3); // 3

console.log("-------------------");

// Destructure a function parameter
const func = (a, b, c) => {
  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // 3
  return [a, b, c];
};
const [a4, b4, c4] = func(1, 2, 3);
console.log(a4); // 1
console.log(b4); // 2
console.log(c4); // 3

console.log("-------------------");

// Destructure a function return value
const func2 = (a, b, c) => [a, b, c];
const [a5, b5, c5] = func2(1, 2, 3);
console.log(a5); // 1
console.log(b5); // 2
console.log(c5); // 3

console.log("-------------------");

// Destructure a class property
class MyClass {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}
const obj2 = new MyClass(1, 2, 3);
const { a: a6, b: b6, c: c6 } = obj2;
console.log(a6); // 1
console.log(b6); // 2
console.log(c6); // 3

console.log("-------------------");

// Destructure a class method
class MyClass2 {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  method() {
    return [this.a, this.b, this.c];
  }
}
const obj3 = new MyClass2(1, 2, 3);
const [a7, b7, c7] = obj3.method();
console.log(a7); // 1
console.log(b7); // 2
console.log(c7); // 3

console.log("-------------------");
