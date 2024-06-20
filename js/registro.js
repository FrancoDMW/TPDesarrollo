window.onload = function () {
    var botonGuardarCambios = document.getElementById("botonGuardarCambios");
    var botonCancelar = document.getElementById("botonCancelarSuscripcion");
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var email = document.getElementById("email");
    var usuario = document.getElementById("usuario");
    var contraseña = document.getElementById("contraseña");
    var contraRepetir = document.getElementById("contraRepetir");
    var numeroTarjeta = document.getElementById("numeroTarjeta");
    var codigoTarjeta = document.getElementById("codigoTarjeta");

    ComprobarInputRegistro();

    nombre.addEventListener("input", ComprobarInputRegistro);
    apellido.addEventListener("input", ComprobarInputRegistro);
    email.addEventListener("input", ComprobarInputRegistro);
    usuario.addEventListener("input", ComprobarInputRegistro);
    contraseña.addEventListener("input", ComprobarInputRegistro);
    contraRepetir.addEventListener("input", ComprobarInputRegistro);
    numeroTarjeta.addEventListener("input", ComprobarInputRegistro);
    codigoTarjeta.addEventListener("input", ComprobarInputRegistro);

    function ComprobarInputRegistro() {
        if (nombre.value && apellido.value && email.value && usuario.value && contraseña.value && contraRepetir.value && numeroTarjeta.value && codigoTarjeta.value) {
            botonGuardarCambios.disabled = false;
        }
        else {
            botonGuardarCambios.disabled = true;
        }
    }

    botonGuardarCambios.addEventListener("click", function (event) {
        event.preventDefault();
        EnviarFormRegistro();
    })

    botonCancelar.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "../index.html"
    })
}

function EnviarFormRegistro() {
    var formulario = document.getElementById("formPago");
    var validar = true;
    if (ValidarLetras(nombre) == false) {
        validar = false;
        alert("Error: 'Nombre' solo acepta letras.");
    }
    if (ValidarLetras(apellido) == false) {
        validar = false;
        alert("Error: 'Apellido' solo acepta letras.");
    }
    if (ValidarEmail(email) == false) {
        validar = false;
        alert("Error: 'E-mail' no tiene un formato correcto.")
    }
    if (ValidarNumerosYLetras(usuario) == false) {
        validar = false;
        alert("Error: 'Nombre de usuario' solo acepta numeros y letras.");
    }
    if (ValidarContraseña(contraseña) == false) {
        validar = false;
        alert("Error: 'Contraseña' debe tener 8 caracteres como maximo,con 2 letras, 2 numeros y 2 caracteres especiales.")
    }
    if (ValidarRepetirContraseña(contraRepetir) == false) {
        validar = false;
        alert("Error: Las contraseñas no son iguales.");
    }
    if (ValidarCodigoTarjeta(codigoTarjeta) == false) {
        validar = false;
        alert("Error: El 'Codigo de seguridad de la Tarjeta' deben ser 3 numeros.")
    }
    if (ValidarCodigoTarjeta(codigoTarjeta) == true) {
        if (codigoTarjeta.value == "000") {
            validar = false;
            alert("Error: El 'Codigo de seguridad de la Tarjeta' no puede ser '000'.")
        }
    }
    if (ValidarNumeroTarjeta(numeroTarjeta) == false) {
        validar = false;
        alert("Error: El 'Numero de Tarjeta' debe ser entre 16 y 19 numeros.")
    }
    if (ValidarNumeroTarjeta(numeroTarjeta) == true) {
        if(ValidarUltimoDigitoTarjeta()==false){
            validar = false;
        }
    }
    if(validar == true){
        alert("¡Registro Exitoso!");
        window.location.href = "../index.html";
    }

}

function ValidarLetras(valor) {
    var soloLetras = /^[A-Za-z]+$/;
    if (valor.value.trim() === '' || !soloLetras.test(valor.value)) {
        return false;
    }
}

function ValidarEmail(valor) {
    var soloEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (valor.value.trim() === '' || !soloEmail.test(valor.value)) {
        return false;
    }
}

function ValidarNumerosYLetras(valor) {
    var soloNumerosYLetras = /^[a-zA-Z0-9]+$/
    if (valor.value.trim() === '' || !soloNumerosYLetras.test(valor.value)) {
        return false;
    }
}

function ValidarContraseña(valor) {
    var validarContraseña = /^(?=.*\d{2})(?=.*[a-zA-Z]{2})(?=.*[\W_]{2}).{8}$/;
    if (valor.value.trim() === '' || !validarContraseña.test(valor.value)) {
        return false;
    }
}

function ValidarRepetirContraseña(valor) {
    var contra = document.getElementById("contraseña");
    if (valor.value != contra.value) {
        return false;
    }
}

function ValidarCodigoTarjeta(valor) {
    var codigoTarjeta = /^\d{3}$/;
    if (!codigoTarjeta.test(valor.value)) {
        return false;
    } else {
        return true;
    }
}

function ValidarNumeroTarjeta(valor) {
    var numeroTarjeta = /^\d{16,19}$/;
    if (!numeroTarjeta.test(valor.value)) {
        return false;
    } else {
        return true;
    }
}


function ValidarUltimoDigitoTarjeta() {
    var numeroTarjeta = document.getElementById("numeroTarjeta").value;
    var ultimoNumero = parseInt(numeroTarjeta[numeroTarjeta.length - 1]);
    var sumaNumeros = 0;
    for (var i = 0; i < numeroTarjeta.length - 1; i++) {
        sumaNumeros += parseInt(numeroTarjeta[i]);
    }
    if (sumaNumeros % 2 === 0) {
        if (ultimoNumero % 2 === 0) {
            alert("Error: El 'Numero de Tarjeta' debe terminar en un numero impar si la suma de sus numeros da un numero par");
            return false;
        }
    }
    if (sumaNumeros % 2 !== 0) {
        if (ultimoNumero % 2 !== 0) {
            alert("Error: El 'Numero de Tarjeta' debe terminar en un numero par si la suma de sus numeros da un numero impar");
            return false;
        }
        else {
            return true;
        }
    }
    else {
        return true;
    }
}