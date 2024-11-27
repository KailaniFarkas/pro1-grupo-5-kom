document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const terminosCheckbox = document.getElementById("terms");
    const terminosError = document.getElementById("terminosError")

    let attemptedSubmit = false; 

    form.addEventListener("submit", (event) => {
        let isValid = true;
        attemptedSubmit = true;

        // Validar Email
        if (emailInput.value.trim() === "") {
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // Validar Contraseña
        if (passwordInput.value.trim() === "") {
            passwordError.style.display = "block";
            isValid = false;
        } else {
            passwordError.style.display = "none";
        }

        // Validar Checkbox de "Términos y condiciones"
        if (!terminosCheckbox.checked) {
            terminosError.style.display = "block"; 
            isValid = false;
        } else {
            terminosError.style.display = "none"; 
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

    terminosCheckbox.addEventListener("change", () => {
        if (attemptedSubmit) {
            if (!terminosCheckbox.checked) {
                terminosError.style.display = "block";
            } else {
                terminosError.style.display = "none";
            }
        }
    });
});