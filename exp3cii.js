"use strict";
class Library {
    static libraryName = "Central Library";
    static totalBooksIssued = 0;
    bookId;
    bookTitle;
    constructor(title, id) {
        this.bookTitle = title;
        this.bookId = id;
        Library.totalBooksIssued++;
    }
    static libraryRules() {
        console.log(`Welcome to ${this.libraryName}. Return books within 15 days.`);
    }
    showBook() {
        console.log(`Book: ${this.bookTitle}`);
        console.log(`Book ID: ${this.bookId}`);
    }
}
// Execution
console.log(Library.libraryName);
Library.libraryRules();
const book1 = new Library("Java Programming", "BK101");
const book2 = new Library("Python Basics", "BK102");
console.log(book1.bookId);
// book1.bookId = "BK999"; // Error
book1.showBook();
book2.showBook();
console.log(`Total Books Issued: ${Library.totalBooksIssued}`);
