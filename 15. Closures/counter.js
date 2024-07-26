// A script that uses a closure to maintain a private counter with a function that increments the counter

let counter = (function () {
  let count = 0;
  return function () {
    return `id-${++count}`;
  };
})();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());