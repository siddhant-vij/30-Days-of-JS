const calculator = (op1, op2, operator) => {
  switch (operator) {
    case "+":
      return op1 + op2;
    case "-":
      return op1 - op2;
    case "*":
      return op1 * op2;
    case "/":
      return op1 / op2;
    case "%":
      return op1 % op2;
  }
};

const greetings = (name) => `Hello ${name}!`;

module.exports = { calculator, greetings };
