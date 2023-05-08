const apiLink = "http://localhost:3000/toys";

document.addEventListener("DOMContentLoaded", () => {
    fetch ("db.json")
    .then(response => response.json())
    .then(data => data.forEach(books => /*PUT A FUNCTION in Headers*/ (books)))

})