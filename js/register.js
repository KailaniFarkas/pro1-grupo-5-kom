let formulario = document.querySelector("#registerForm");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
let terminosCheckbox = document.querySelector("#terminos");

let emailError = document.querySelector("#emailError");
let passwordError = document.querySelector("#passwordError");
let terminosError = document.querySelector("#terminosError")

formulario.addEventListener('submit', function(event){
    
    if (emailInput.value == ""){
        event.preventDefault();
        emailError.style.display = "block";
    } 
    if (passwordInput.value == ""){
        event.preventDefault();
        passwordError.style.display = "block";
    }

    if (!terminosCheckbox.checked){
        event.preventDefault();
        terminosError.style.display = "block";
    }
});