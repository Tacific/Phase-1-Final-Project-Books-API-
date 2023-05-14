# Phase-1-Final-Project-Books-API-Local-JSON

This is a Single Page Application using API/localJSON data base.
HTML/CSS/JavaScript.

## Description 

This is a Library App. The purpose of this App is to allow the user to create a Library Card and get 
info on the avaiable books.  The data base is local (db.json).  

![Library Final](https://github.com/Tacific/Phase-1-Final-Project-Books-API-/assets/122184578/f15ae3ea-2981-4997-9059-399437cfba15)

## Instructions
Project is using a local db.json file.<br>
User will create Library Card via submit Form. <br>
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
The user can enter their name in the input section. 
User can rest form.  
Pictures is clickable.  
Once clicked information will pop-up.  
User can clear info by pressing clearInfo button. 

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

