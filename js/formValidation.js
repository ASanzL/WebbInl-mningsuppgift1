var elHelpText = document.getElementById('formHelp');
var elUsername = document.getElementById('username');
var elPassword = document.getElementById('password');
var elSubmit = document.getElementById('submit');

//Dölj hjälp rutan
elHelpText.hidden = true;
var usernameLocalStorageString = "username";
if(localStorage.getItem(usernameLocalStorageString) != null){
    elUsername.setAttribute("placeholder", localStorage.getItem(usernameLocalStorageString));
}

function validate() {
    if(elUsername.value.length < 5 && elUsername.value.length != 0){
        writeError("Användarnamn måste vara lika med eller fler än 5 tecken.")
    }
    else if(elPassword.value.length < 4 && elPassword.value.length != 0){
        writeError("Lösenord måste vara lika med eller fler än 4 tecken.")
    }
    else{
        elHelpText.innerText = "";
        elHelpText.hidden = true;
    }
}

function addUser(event) {
    console.log("1");
    if(elHelpText.innerText == "") {
        console.log("2");
        localStorage.setItem(usernameLocalStorageString, elUsername.value);
    }
    event.preventDefault();
}

function writeError(text){
    elHelpText.hidden = false;
    elHelpText.innerText = text;
}

elUsername.addEventListener("input", validate);
elPassword.addEventListener("input", validate);
elSubmit.addEventListener("click", addUser);