
document.addEventListener("DOMContentLoaded", () => {
    fetch ("http://localhost:3000/books")
    .then(response => response.json())
    .then(data => console.log(data))

})
function dispalyBooks(book){
    const bookObj = document.createElement('ul')
}