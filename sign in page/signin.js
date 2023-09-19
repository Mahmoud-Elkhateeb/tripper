var myForm = document.getElementById("myForm");
var myEmail = document.getElementById("myEmail");
var ErrorEmail = document.getElementById("preventEmail");
const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
var myPassword = document.getElementById("myPassword");
var ErrorPassword = document.getElementById("preventPassword");
myForm.addEventListener('submit', function (submit) {
    if (myEmail.value === '') {
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
    }
});