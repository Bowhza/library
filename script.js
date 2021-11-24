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
        let readButton = document.createElement("button");
        let removeBookButton = document.createElement("button");

        let readStatus = myLibrary[bookCounter].read;

        bookCard.classList.add("book-card")
        bookCardTitle.classList.add("card-title");

        bookCardTitle.innerText = `Title: ${myLibrary[bookCounter].title}`; 
        bookCardAuthor.innerText = `Author: ${myLibrary[bookCounter].author}`;
        bookCardPages.innerText = `Pages: ${myLibrary[bookCounter].pages}`;
        removeBookButton.innerText = "Remove Book"

        if (readStatus == true) {
            readButton.style.backgroundColor = "lightgreen";
            readButton.innerText = "Read";
        } else {
            readButton.style.backgroundColor = "lightcoral";
            readButton.innerText = "Not Read";
        };

        readButton.addEventListener("click", () => {
            if (readStatus == true) {
                readStatus = false;
                readButton.innerText = "Not Read";
                readButton.style.backgroundColor = "lightcoral";
            } else if (readStatus == false) {
                readStatus = true;
                readButton.innerText = "Read";
                readButton.style.backgroundColor = "lightgreen";
            };
        });

        removeBookButton.addEventListener("click", () => {
            bookContainer.removeChild(bookCard);
            myLibrary.splice(bookCard.value, 1);
            bookCounter -= 1;
            console.log(myLibrary);
        });

        bookCard.append(bookCardTitle, bookCardAuthor, bookCardPages, readButton, removeBookButton);
        bookContainer.appendChild(bookCard);
        
    };
};

addBookButton.addEventListener("click", () => {
    if (bookTitle.value.length == 0) {
        alert("Please enter a value for the title");
    } else if (bookAuthor.value.length == 0) {
        alert("Please enter a value for the author");
    } else if (bookPages.value.length == 0 || isNaN(bookPages.value)) {
        alert("Please enter a numeric value for the pages");
        bookPages.value = "";
    } else {
        addBookToLibrary();
        displayBook();
        bookTitle.value = "";
        bookAuthor.value = "";
        bookPages.value = "";
        isRead.checked = false;
    };
});

