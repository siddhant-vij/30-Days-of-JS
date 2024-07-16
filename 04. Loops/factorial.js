// Write a script that calculates the factorial of a given number using a do-while loop

const factorial = (n) => {
  let result = 1;
  let i = 1;
  do {
    result *= i;
    i++;
  } while (i <= n);
  return result;
};

console.log(factorial(6));