const sequences = [
  "123a",
  "xyz",
  "abc123",
  "123",
  "123abc",
  "abc",
  "a1b2c3def",
  "abc0xyz",
];

const oneOrMoreDigitRegex = /\d+/;

console.log(sequences.filter((sequence) => sequence.match(oneOrMoreDigitRegex)));