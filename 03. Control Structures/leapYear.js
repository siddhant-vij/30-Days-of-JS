// Write a script that checks if a year is a leap year or not

const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
};

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2021)); // false
console.log(isLeapYear(2022)); // false
console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2000)); // true
