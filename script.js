//Assign fetch to variable
const fetchAPI = () => {
    fetch("http://localhost:3000/mountains")
    .then(response => response.json())
    .then(places => addPlaces(places))
    }
    //Have to call function
    fetchAPI()

    //Stop Reload addEventListner
const form = document.querySelector("form")
form.addEventListener("submit",(e) =>{
    e.preventDefault(),
    console.log(e)})


    //Create function to append with addEventListner
const addPlaces = (dataArray) => {

    //getElementById and assign to variable
    const mountContainer = document.getElementById("mount-container")
