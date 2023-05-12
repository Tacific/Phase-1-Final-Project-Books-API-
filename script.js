//1st Part Create DOM and Fetch

document.addEventListener("DOMContentLoaded", () => 
    fetch ("http://localhost:3000/book")
    .then((response) => response.json())
    .then((books) => {
    books.forEach(bookReader)}))

//Build eventListiners
function displayImage(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    document.body.appendChild(img);
   }

const booksToRead = document.querySelector('.books-to-read')
console.log(booksToRead)

function bookReader (bookData) {
    const bookDiv = document.createElement("div")
    const bookPara = document.createElement("p")
    bookPara.textContent = bookData.img
    bookDiv.append(bookPara)
    booksToRead.append(bookDiv)
}

function formMaker(){


}