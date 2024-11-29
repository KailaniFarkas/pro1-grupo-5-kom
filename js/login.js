document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    //  CAMBIAR COSAS 
    let attemptedSubmit = false; 

    form.addEventListener("submit", (event) => {
        let isValid = true;
        attemptedSubmit = true;

        if (emailInput.value.trim() === "") {
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        if (passwordInput.value.trim() === "") {
            passwordError.style.display = "block";
            isValid = false;
        } else {
            passwordError.style.display = "none";
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            window.location.href = "login.html";
        }
    });


    emailInput.addEventListener("input", () => {
        if (attemptedSubmit) {
            if (emailInput.value.trim() === "") {
                emailError.style.display = "block";
            } else {
                emailError.style.display = "none";
            }
        }
    });

    passwordInput.addEventListener("input", () => {
        if (attemptedSubmit) {
            if (passwordInput.value.trim() === "") {
                passwordError.style.display = "block";
            } else {
                passwordError.style.display = "none";
            }
        }
    });
});