let formulario = document.querySelector("#registerForm");
let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");

formulario.addEventListener('submit', function(event){
    
    if (emailInput.value == ""){
        event.preventDefault();
        alert("Por favor compelte el campo de email")

    } 
    if (passwordInput.value == ""){
        event.preventDefault();
        alert("Por favor compelte el campo de contraseña")
    }
});