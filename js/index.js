window.onload = function () {
    var enviar = document.getElementById("enviar");
    enviar.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del formulario por el submit
        EnviarForm();
    });
    var recuperar = document.getElementById("recuperarContra");
    recuperar.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del botón
        window.location.href = "./pages/recuperarContra.html";
    });
    var registrarse = document.getElementById("registrarse");
    registrarse.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del botón
        window.location.href = "./pages/registro.html";
    });
}

function EnviarForm() {
    var validar = true;
    var formulario = document.getElementById("formulario");
    var usuario = document.getElementById("textUsuario");
    let contraseña = document.getElementById("textContraseña");
    if (!usuario.value) {
        alert("Por favor, ingrese su usuario");
        usuario.focus();
        validar = false;
    }
    if (!contraseña.value) {
        alert("Por favor, ingrese su contraseña");
        contraseña.focus();
        validar = false;
    }
    if (validar) {
        let user = usuario.value;
        let pass = contraseña.value;
        localStorage.setItem("usuario", user);
        localStorage.setItem("contraseña", pass);
        formulario.submit();
        alert("Validación exitosa");
        window.location.href = "./pages/home.html";
    }
}
