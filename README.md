# Phase-1-Final-Project-Books-API-Local-JSON

This is a API/ local JSON data base Project Phase-1 
HTML/CSS/JavaScript.

## This is a Library App

The purpose of this App is to allow the user to create a Library Card and get 
info on the avaiable books.  The data base is local (db.json).



## Instructions
User will create Library Card via submit Form.
```html
 <form>
        <label for="fname">First Name:</label><br>
        <input type="text" id="fname" name="fname" value=" "><br>
        <label for="lname">Last Name:</label><br>
        <input type="text" id="lname" name="lname" value=" "><br><br>
        <button id="submitbtn" type="submit">Sumbit</button><br><br>
        <input type="reset" value="Clear Form" />
</form> 
```
After user submit info, user will click on images to get info for Books.

### Important Note
After user hit submit button the page will reload.  To prevent such an event, **e.preventDefault()** will be used to prevent a reload.
```JS
const form = document.querySelector("form")
form.addEventListener("submit",(e) =>{
    e.preventDefault()})
```
## Contributing

Pull requests are welcome.  This is a Student project.   

## License

[MIT](https://choosealicense.com/licenses/mit/) 

# Credit for Images 

[Pixabay](https://pixabay.com/images/search/books/)