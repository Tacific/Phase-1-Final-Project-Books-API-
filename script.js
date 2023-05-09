
document.addEventListener("DOMContentLoaded", () => 
    fetch ("http://localhost:3000/books")
    .then((response) => response.json())
    .then((books) => {
        const container = document.querySelector("ul#booksToRead");
        books.forEach(book => {
            
        })
});
