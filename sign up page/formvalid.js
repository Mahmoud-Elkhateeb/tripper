var myForm = document.getElementById("myForm");
var myName = document.getElementById("myName");
var ErrorName = document.getElementById("preventName");
var myNumber = document.getElementById("myNumber");
var ErrorNumber = document.getElementById("preventNumber");
var myEmail = document.getElementById("myEmail");
var ErrorEmail = document.getElementById("preventEmail");
const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
var myPassword = document.getElementById("myPassword");
var ErrorPassword = document.getElementById("preventPassword");
var myConfirm = document.getElementById("myConfirm");
var ErrorConfirm = document.getElementById("preventConfirm");
myForm.addEventListener('submit', function (submit) {
    if (myName.value === '') {
        ErrorName.innerHTML = "your Name is required";
        ErrorName.style = "color:red;";
        submit.preventDefault();
    } else if (!isNaN(myName.value)) {
        ErrorName.innerHTML = "you should enter a character";
        ErrorName.style = "color:red;";
        submit.preventDefault();
    } else if (myName.value.length < 2 || myName.value.length > 40) {
        ErrorName.innerHTML = "you should value between 2 and 25 character";
        ErrorName.style = "color:red;";
        submit.preventDefault();
    } else if (myNumber.value === '') {
        ErrorNumber.innerHTML = "your Number is required";
        ErrorNumber.style = "color:red;";
        submit.preventDefault();
    } else if (isNaN(myNumber.value)) {
        ErrorNumber.innerHTML = "you should enter a Number just";
        ErrorNumber.style = "color:red;";
        submit.preventDefault();
    } else if (myNumber.value.length < 11 || myName.value.length > 11) {
        ErrorNumber.innerHTML = "you should enter 11 Number";
        ErrorNumber.style = "color:red;";
        submit.preventDefault();
    } else if (myEmail.value === '') {
        ErrorEmail.innerHTML = "please enter valid email";
        ErrorEmail.style = "color:red;";
        submit.preventDefault();
    } else if (!emailRegex.test(myEmail.value)) {
        ErrorEmail.innerHTML = "please enter valid email like that 'example@gmail.com'";
        ErrorEmail.style = "color:red;";
        submit.preventDefault();
    } else if (myPassword.value === '' || myPassword.value.length < 8 || myPassword.value.length > 20) {
        ErrorPassword.innerHTML = "please your password is requird and the character between 8 and 20";
        ErrorPassword.style = "color:red;";
        submit.preventDefault();
    } else if (myPassword.value !== myConfirm.value) {
        ErrorConfirm.innerHTML = "please the Confirm password shoud equale the password you create";
        ErrorConfirm.style = "color:red";
        submit.preventDefault();
    }
});