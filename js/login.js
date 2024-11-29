let formulario = document.querySelector("#registerForm");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");

let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");

formulario.addEventListener('submit', function(event){
    
    if (emailInput.value == ""){
        event.preventDefault();
        emailError.style.display = "block";
    } 
    if (passwordInput.value == ""){
        event.preventDefault();
        passwordError.style.display = "block";
    }
});