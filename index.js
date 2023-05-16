// Book constructor function
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Author constructor function
function Author(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.books = [];
}

// Add a method to the Author prototype
Author.prototype.addBook = function(book) {
  this.books.push(book);
}

// Create some authors and books
let author1 = new Author("Robert", "Kiyosaki");
let author2 = new Author("Sarah", "Jakes");
let author3 = new Author("Viola", "Davis");

let book1 = new Book("Rich Dad, Poor Dad", author1, 1997);
let book2 = new Book("Woman Evolve", author2, 2021);
let book3 = new Book("Finding Me", author3, 2022)

// Add books to respective authors
author1.addBook(book1);
author2.addBook(book2);
author3.addBook(book3);

// Display authors and their books
console.log(author1.firstName + " " + author1.lastName);
console.log("Book 1");
author1.books.forEach(function(book) {
  console.log(book.title + " (" + book.year + ")");
});

console.log(author2.firstName + " " + author2.lastName);
console.log("Book 2");
author2.books.forEach(function(book) {
  console.log(book.title + " (" + book.year + ")");
});

console.log(author3.firstName + " " + author3.lastName);
console.log("Book 3");
author3.books.forEach(function(book) {
  console.log(book.title + " (" + book.year + ")");
});
