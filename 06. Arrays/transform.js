const arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]

// Array transformation with map - double
const double = arr.map((num) => num * 2);
console.log(double); // [2, 4, 6, 8, 10]

// Array transformation with filter - even
const even = arr.filter((num) => num % 2 === 0);
console.log(even); // [2, 4]

// Array transformation with reduce - sum
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
