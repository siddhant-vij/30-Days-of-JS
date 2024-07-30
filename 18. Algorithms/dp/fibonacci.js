// Fibonacci Series using DP

const fib = (n) => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  return table[n];
};

console.log(fib(10)); // 55
console.log(fib(50)); // 12586269025
console.log(fib(75)); // 2111485077978050

// Time Complexity: O(n)
// Space Complexity: O(n)