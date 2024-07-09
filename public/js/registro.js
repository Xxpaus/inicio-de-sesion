document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");

    function guardarDatos(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const telefono = document.getElementById("telefono").value;
        const password = document.getElementById("password").value;

        const datos = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            password: password
        };

        localStorage.setItem("datosUsuario", JSON.stringify(datos));

      
        window.location.href = "/pages/sesion.html";
    }

  
    formulario.addEventListener("submit", guardarDatos);
});