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

const startsWithTRegex = /^\bT/;

words.forEach((word) => {
  if (startsWithTRegex.test(word)) {
    console.log(word);
  }
});

console.log("-------------------");

const endsWitheRegex = /e\b$/;
words.forEach((word) => {
  if (endsWitheRegex.test(word)) {
    console.log(word);
  }
})