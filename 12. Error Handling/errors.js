// A script that demostrates error handling using try, catch and finally blocks - throwing custom error

const division = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

try {
  const result = division(10, 0);
  console.log(result);
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Finally block executed");
}

// Output: Cannot divide by zero
// Finally block executed