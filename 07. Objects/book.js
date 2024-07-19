const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,

  getDetails: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },

  setYear: function (newYear) {
    this.year = newYear;
  },
};

// Log the book object
console.log(book);

// Log the properties of the book object
console.log(book.title);
console.log(book.author);
console.log(book.year);

// Log the method results of the book object
console.log(book.getDetails());

// Set the year property of the book object
book.setYear(1927);
console.log(book.getDetails());

console.log("-------------------");

// Object Properties Iteration using for...in
for (const property in book) {
  console.log(`${property}: ${book[property]}`);
}

console.log("-------------------");

// Object Properties Iteration using Object.keys
for (const property of Object.keys(book)) {
  console.log(`${property}: ${book[property]}`);
}

console.log("-------------------");

// Object Properties Iteration using Object.values
for (const value of Object.values(book)) {
  console.log(value);
}