class Library {

    public static readonly libraryName: string = "Central Library";
    public static totalBooksIssued: number = 0;

    public readonly bookId: string;
    public bookTitle: string;

    constructor(title: string, id: string) {
        this.bookTitle = title;
        this.bookId = id;

        Library.totalBooksIssued++;
    }

    public static libraryRules(): void {
        console.log(`Welcome to ${this.libraryName}. Return books within 15 days.`);
    }

    public showBook(): void {
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