const wordToFind = "JavaScript";

const regex = new RegExp(wordToFind, "gi");

const sentence =
  "I love JavaScript. JavaScript is my favorite programming language.";

console.log(sentence.match(regex).length);
console.log(sentence.match(regex));

const stringWithDigits = "1213asdfUIOP456!@#-7890";
const digitRegex = /\d/g;
console.log(stringWithDigits.match(digitRegex));
