// Write a script that prints the multiplication table of a given number

const printTable = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
};

printTable(5);