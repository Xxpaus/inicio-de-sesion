document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");


    function iniciarSesion(e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const datosGuardados = JSON.parse(localStorage.getItem("datosUsuario"));

        if (datosGuardados) {
            if (email === datosGuardados.email && password === datosGuardados.password) {
                loginMessage.textContent = "Inicio de sesión exitoso.";
                loginMessage.style.color = "green";

                window.location.href = "/pages/tienda.html";
            } else {
                loginMessage.textContent = "Correo o contraseña incorrectos.";
                loginMessage.style.color = "red";
            }
        } else {
            loginMessage.textContent = "No hay datos guardados.";
            loginMessage.style.color = "red";
        }
    }

    loginForm.addEventListener("submit", iniciarSesion);

});
