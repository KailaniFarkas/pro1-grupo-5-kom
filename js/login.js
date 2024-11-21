let email= document.getElementById("email")
let contraseña= document.getElementById("contraseña")
let loginForm= document.querySelector8 (".loginForm")




loginForm.addEventListener('submit', function (e) {
   e .preventDefault();
   if (email === '') {
    alert('Por favor complete el campo email');
    return;

    }else if  (contraseña === '') {
    alert('Por favor complete el campo contraseña');
    return;

    } else {loginForm.submit ()}

});