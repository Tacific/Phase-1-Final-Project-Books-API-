//Assign fetch to variable
const fetchAPI = () => {
    fetch("http://localhost:3000/mountains")
    .then(response => response.json())
    .then(places => addPlaces(places))
    }
    //Have to call function
    fetchAPI()