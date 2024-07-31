const words = [
  "The",
  "quick",
  "Brown",
  "Fox",
  "jumps",
  "over",
  "The",
  "Lazy",
  "Dog",
];

const startsWithCapitalRegex = /\b[A-Z][a-z]*\b/g;

console.log(words.join(" ").match(startsWithCapitalRegex));
