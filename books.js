class Book{
    constructor(title, genre, author, read){
        this.title = title || "No Title";
        this.genre = genre || "Fiction";
        this.author = author || "No Author";
        this.read = read || false; 
        this.startReadDate = null;
        this.endReadDate = null;
    }
}

class BookList{
    constructor(){
        this.bookArray = [];
        this.currentBook = null;
        this.nextBook = null;
        this.lastBook = null;
    }

    add = (enteredBook) => {
        this.bookArray.push(enteredBook);
    }

    display(){
        console.log(this.bookArray);
    }

    setCurrent = (book) => {
        if(this.currentBook === book)
            console.log(`You are already reading ${book.title} since ${book.startReadDate}`);
        else{
            book.startReadDate = new Date(Date.now());
            this.currentBook = book;
            var flag = 0;
            for(var obj in this.bookArray)
            {
                if(flag == 1)
                {
                    this.nextBook = this.bookArray[obj];
                    break;
                }
                if(this.bookArray[obj] == book)
                    flag = 1;
            }
            console.log(`Yay! You just started reading ${book.title}`);
        }
    }
    get CurrentBook() {
        return this.currentBook
          ? console.log(`You are currently reading: ${this.currentBook.title}`)
          : console.log("You're not reading any book at the moment");
    }

    get LastBook() {
        if (!this.lastBook) 
            console.log("You haven't been reading much lately you naughty geek!");
        else 
            return console.log(`The last book you read was: ${this.lastBook.title}. You finished it on ${this.lastBook.endReadDate}`);
    }

    get NextBook() {
        return this.nextBook
          ? console.log(`Next book to read is : ${this.nextBook.title}`)
          : console.log("You read all the books");
    }

    get AllBooksCount() {
        return this.bookArray.length;
    }

    get BooksToRead() {
        console.log("Books to Read is " );
        for(var obj in this.bookArray.filter((b) => !b.read)){
            console.log(this.bookArray[obj]);
        }
    }

    finishCurrentBook(){
        if (this.currentBook) {
            this.currentBook.read = true;
            this.currentBook.endReadDate = new Date(Date.now());
            this.lastBook = this.currentBook;
            this.setCurrent(this.nextBook);
        } 
        else {
            console.log("You don't have current Book");
        }
    }
}

var bookStack = new BookList();
var book1 = new Book();
book1.title = "Wings of Fire";
book1.author = "A.P.J.Abdul Kalam";
book1.genre = "Motivational";
bookStack.add(book1);

var book2 = new Book();
book2.title = "Fear Not Be Strong";
book2.author = "Swamy Vivekananda";
book2.genre = "Strength and Fearlessness";
bookStack.add(book2);

var book3 = new Book();
book3.title = "Life is What You Make It";
book3.author = "Preethi shenoy";
book3.genre = "Story";
bookStack.add(book3);

var book4 = new Book();
book4.title = "A Girl That Had to be Strong";
book4.author = "Garima Pradhan";
book4.genre = "Horror";
bookStack.add(book4);

var book5 = new Book();
book5.title = "To Kill a Mocking Bird";
book5.author = "Harper Lee";
book5.genre = "Novel";
bookStack.add(book5);

bookStack.setCurrent(book1);

console.log("Before Finishing Current Book...");
bookStack.display();
console.log("After Finishing Current Book...");
bookStack.finishCurrentBook();
bookStack.display();

bookStack.NextBook;
bookStack.CurrentBook;
bookStack.LastBook;

bookStack.BooksToRead;
