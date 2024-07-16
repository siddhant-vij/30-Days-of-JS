// Print Pattern
// *
// **
// ***
// ****
// *****

const printPattern = (numRows) => {
  for (let i = 1; i <= numRows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
};

printPattern(5);