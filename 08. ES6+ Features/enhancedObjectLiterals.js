// Enhanced Object Literals Demo

console.log("No longer necessary to use the function keyword");

const book1 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  displayDetails: function () {
    console.log(`${this.title} was written by ${this.author} in ${this.year}`);
  },
};
book1.displayDetails();

const book2 = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  displayDetails() {
    console.log(`${this.title} was written by ${this.author} in ${this.year}`);
  },
};
book1.displayDetails();

console.log("--------------------");

const book4 = {
  ["title"]: "The Hobbit",
  author: "J. R. R. Tolkien",
  ["year"]: 1937,
  getDetails() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
console.log(book4.title);
console.log(book4.author);
console.log(book4.year);
console.log(book4.getDetails());
