var elHelpText = document.getElementById('formHelp');
var elUsername = document.getElementById('username');
var elPassword = document.getElementById('password');

//Dölj hjälp rutan
elHelpText.hidden = true;

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

function writeError(text){
    elHelpText.hidden = false;
    elHelpText.innerText = text;
}

elUsername.addEventListener("input", validate);
elPassword.addEventListener("input", validate);