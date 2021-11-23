const bookContainer = document.querySelector(".book-container");
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const bookPages = document.getElementById("book-pages")
let isRead = document.getElementById("read");
const addBookButton = document.getElementById("add-book");


let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

function addBookToLibrary() {
    let newBook = Object.create(Book);
    newBook.title = bookTitle.value;
    newBook.author = bookAuthor.value;
    newBook.pages = bookPages.value;
    newBook.read = isRead.checked;
    
    myLibrary.push(newBook);
};

isRead.addEventListener("click", () => {
    if (document.getElementById("read").checked) {
        return true;
    } else {
        return false;
    };
});

let bookCounter = 0

function displayBook() {
    for (bookCounter; bookCounter < myLibrary.length; bookCounter ++) {
        let bookCard = document.createElement("div");
        let bookCardTitle = document.createElement("div");
        let bookCardAuthor = document.createElement("div");
        let bookCardPages = document.createElement("div");
        let bookCardRead = document.createElement("button");
        let removeBookButton = document.createElement("button");

        bookCard.classList.add("book-card")

        bookCardTitle.innerText = `Title: ${myLibrary[bookCounter].title}`; 
        bookCardAuthor.innerText = `Author: ${myLibrary[bookCounter].author}`;
        bookCardPages.innerText = `Pages: ${myLibrary[bookCounter].pages}`;
        removeBookButton.innerText = "Remove Book"

        if (myLibrary[bookCounter].read == true) {
            bookCardRead.style.backgroundColor = "lightgreen";
            bookCardRead.innerText = "Read";
        } else {
            bookCardRead.style.backgroundColor = "lightcoral";
            bookCardRead.innerText = "Not Read";
        };

        removeBookButton.addEventListener("click", () => {
            bookContainer.removeChild(bookCard);
            myLibrary.splice(bookCard.value, 1);
            bookCounter -= 1;
            console.log(myLibrary);
        });

        bookCard.append(bookCardTitle, bookCardAuthor, bookCardPages, bookCardRead, removeBookButton);
        bookContainer.appendChild(bookCard);
        
    };
};

addBookButton.addEventListener("click", () => {
    addBookToLibrary();
    displayBook();
});
