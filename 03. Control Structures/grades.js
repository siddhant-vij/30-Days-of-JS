// Write a script that uses a switch statement to print the grade of a student based on their marks

const checkGrade = (marks) => {
  switch (true) {
    case marks >= 90:
      return "A";
    case marks >= 80:
      return "B";
    case marks >= 70:
      return "C";
    case marks >= 60:
      return "D";
    case marks >= 50:
      return "E";
    default:
      return "F";
  }
};

console.log(checkGrade(89)); // B
console.log(checkGrade(67)); // D
console.log(checkGrade(43)); // F
console.log(checkGrade(0)); // F
