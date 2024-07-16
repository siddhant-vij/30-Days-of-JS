// Write a script that prints the sum of all numbers from 1 to n

const sumTotal = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumTotal(10));