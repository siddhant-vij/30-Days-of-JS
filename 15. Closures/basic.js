// Demo for basic closure with a function returning another function that accesses the outer function's variable

const calculate = (a, b) => {
  const operators = ["+", "-", "*", "/", "%"];
  const choice = operators[Math.floor(Math.random() * operators.length)];
  return () => {
    switch (choice) {
      case "+":
        console.log(`${a} + ${b} = ${a + b}`);
        break;
      case "-":
        console.log(`${a} - ${b} = ${a - b}`);
        break;
      case "*":
        console.log(`${a} * ${b} = ${a * b}`);
        break;
      case "/":
        console.log(`${a} / ${b} = ${a / b}`);
        break;
      case "%":
        console.log(`${a} % ${b} = ${a % b}`);
        break;
      default:
        console.log("Invalid choice");
    }
  };
};

calculate(5, 2)();
