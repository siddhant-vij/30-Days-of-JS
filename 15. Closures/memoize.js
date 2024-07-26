// A memoization demo function that calculates the factorial of a number. Use a closure to cache the results of previous computations

const memoizedFactorial = () => {
  const cache = {};
  const factorial = (n) => {
    if (n in cache) {
      console.log(`Retrieved result from cache: ${cache[n]}`);
      return cache[n];
    }
    if (n === 0 || n === 1) {
      cache[n] = 1;
    } else {
      cache[n] = n * factorial(n - 1);
    }
    return cache[n];
  };
  return factorial;
};

const factorialWithMemoization = memoizedFactorial();
console.log(factorialWithMemoization(5));
console.log(factorialWithMemoization(7));
console.log(factorialWithMemoization(10));
