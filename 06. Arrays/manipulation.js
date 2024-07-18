// Array creation
const arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]

// Array manipulation with push
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

// Array manipulation with pop
const lastItem = arr.pop();
console.log(arr); // [1, 2, 3, 4, 5]
console.log(lastItem); // 6

// Array manipulation with unshift
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4, 5]

// Array manipulation with shift
const firstItem = arr.shift();
console.log(arr); // [1, 2, 3, 4, 5]
console.log(firstItem); // 0
