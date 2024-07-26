// Demo of a loop that creates an array of functions. Each function should log the index when called. Use a closure to ensure the correct index is logged.

const loopClosure = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(() => console.log(i));
  }
  return arr;
};

loopClosure(5).forEach((func) => func());
