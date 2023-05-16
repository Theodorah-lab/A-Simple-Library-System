function Book(title, author, year) {
  this.tittle = tittle; 
  this.author = author;
  this.year = year;
}

function Author(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.books = [];
}

Author.prototype.addBook = function(book) {
  this.books.push(book);
};

const author1 = new Author("Robert", "Kiyosaki");
const book1 = new Book("Rich Dad, Poor Dad", author1, 1997);
author1.addBook(book1);

const author2 = new Author("Viola", "Davis");
const book2 = new Book("Findind Me", author2, 2022);
author2.addBook(book2);

const author3 = new Author("Sarah", "Jakes");
const book3 = new Book("Woman Evolve", author3, 2021);
author3.addBook(book3);

console.log(author1.firstName + " " + author1.lastName + " books:", author1.books);
console.log(author2.firstName + " " + author2.lastName + " books:", author2.books);
console.log(author3.firstName + " " + author3.lastName + " books:", author3.books);