// Write a script that checks if the number if positive, negative or zero using if-else statements

const checkNumber = (num) => {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
};

console.log(checkNumber(0)); // zero
console.log(checkNumber(1)); // positive
console.log(checkNumber(-1)); // negative
