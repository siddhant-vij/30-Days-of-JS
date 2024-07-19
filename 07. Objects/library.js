const library = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
  },
  {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    year: 1954,
  },
];

console.log(library);

library.forEach((book) => {
  console.log("-------------------");
  console.log(book.title);
  console.log(book.author);
  console.log(book.year);
});
