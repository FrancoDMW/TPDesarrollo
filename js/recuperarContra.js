window.onload = function () {
    var enviar = document.getElementById("buttonEnviarMail");
    var cancelar = document.getElementById("buttonCancelar");
    var email = document.getElementById("email");
    var usuario = document.getElementById("usuario");
    comprobarInput();
    email.addEventListener("input", comprobarInput);
    usuario.addEventListener("input", comprobarInput);
    function comprobarInput(){
        if(email.value && usuario.value){
            enviar.disabled = false;
        }
        else{
            enviar.disabled = true;
        }
    }
    enviar.addEventListener("click", function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del formulario por el submit
        EnviarFormRecuperarContra();
    });
    cancelar.addEventListener("click", function(event){
        event.preventDefault();
        window.location.href="../index.html";
    });
}

function EnviarFormRecuperarContra() {
    var validar = true;
    var formulario = document.getElementById("formRecuperarContra");
    if (!email.value) {
        alert("Por favor, ingrese un E-mail");
        email.focus();
        validar = false;
    }
    if (!usuario.value) {
        alert("Por favor, ingrese su usuario");
        usuario.focus();
        validar = false;
    }
    if (validar) {
        formulario.submit();
        alert("Se ha enviado un mail de recuperacion de contraseña");
        window.location.href = "../index.html";
    }
}
