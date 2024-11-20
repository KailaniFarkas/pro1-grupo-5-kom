const loginForm = document.querySelector('login-form');


loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

 
    const email = document.querySelector('#email').value;
    const contraseña = document.querySelector('#contraseña').value;


    if (email === '') {
        alert('Por favor complete el campo email');
        return;
    }
    if (contraseña === '') {
        alert('Por favor complete el campo contraseña');
        return;
    }


    window.location.href = 'index.html';
});