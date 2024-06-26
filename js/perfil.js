window.onload = function () {
    var botonGuardarCambios = document.getElementById("botonGuardarCambios");
    var botonCancelar = document.getElementById("botonCancelarSuscripcion");
    var contraseña = document.getElementById("contraseña");
    var contraRepetir = document.getElementById("contraRepetir");
    var radioCredito = document.getElementById("radioCredito");
    var radioCupon = document.getElementById("radioCupon");
    var radioTransferencia = document.getElementById("radioTransferencia");
    var checkPagoFacil = document.getElementById("checkPagoFacil");
    var checkRapipago = document.getElementById("checkRapipago");
    var numeroTarjeta = document.getElementById("numeroTarjeta");
    var codigoTarjeta = document.getElementById("codigoTarjeta");
    var cerrarSesion = document.getElementById("botonCancelar");

    ComprobarInputRegistro();

    contraseña.addEventListener("input", ComprobarInputRegistro);
    contraRepetir.addEventListener("input", ComprobarInputRegistro);
    radioCredito.addEventListener("change", ComprobarInputRegistro);
    radioCupon.addEventListener("change", ComprobarInputRegistro);
    radioTransferencia.addEventListener("change", ComprobarInputRegistro);

    botonGuardarCambios.addEventListener("click", function (event) {
        event.preventDefault();
        let medioPago = EnviarFormPerfil(ComprobarRadioButton());
        switch(medioPago){
            case "1":
                let datoDelPago = [{"numeroTarjeta": numeroTarjeta.value},{"codigoTarjeta": codigoTarjeta.value}];
                localStorage.setItem("medioDePago", radioCredito.value);
                localStorage.setItem("datoPago", JSON.stringify(datoDelPago));
                break;
            case "2":
                localStorage.setItem("medioDePago", radioCupon.value);
                if(checkPagoFacil.checked){
                    localStorage.setItem("datoPago", checkPagoFacil.value);
                }else{
                    localStorage.setItem("datoPago", checkRapipago.value);
                }
                break;
            case "3":
                localStorage.setItem("medioDePago", radioTransferencia.value);
                localStorage.removeItem("datoPago");
                break;
        }
    })

    botonCancelar.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "../index.html"
    })

    function ComprobarInputRegistro() {
        if ((contraseña.value && contraRepetir.value) || radioCredito.checked || radioCupon.checked || radioTransferencia.checked) {
            botonGuardarCambios.disabled = false;
        }
        else {
            botonGuardarCambios.disabled = true;
        }
    }

    if (ComprobarInicioSesion() != false) {
        cerrarSesion.hidden = false;
        MostrarUsuario();
    }
    cerrarSesion.addEventListener("click", CerrarSesion);
}

function ComprobarInicioSesion() {
    if (localStorage.length === 0) {
        return false;
    }
}

function CerrarSesion() {
    localStorage.clear();
    window.location.href = "../index.html"
}

function MostrarUsuario() {
    const container = document.querySelector('.sectionImgPerfil');
    let nombreUsuario = localStorage.getItem('usuario');
    const itemDiv = document.createElement('div');
    itemDiv.className = 'nombreUsuario';
    itemDiv.innerHTML = `
            <p>
                ${nombreUsuario}
            <p>
        `;
    container.appendChild(itemDiv);
}

function ComprobarRadioButton() {
    var radio1 = document.getElementById("radioCredito");
    var radio2 = document.getElementById("radioCupon");
    var radio3 = document.getElementById("radioTransferencia");
    var seleccionado = 0
    if (radio1.checked) {
        seleccionado = "1";
    }
    if (radio2.checked) {
        seleccionado = "2";
    }
    if (radio3.checked) {
        seleccionado = "3";
    }
    console.log("seleccionado: " + seleccionado);
    return seleccionado;
}

function EnviarFormPerfil(valorRadio) {
    var formulario = document.getElementById("formularioPerfil");
    var validar = true;
    var medioPago = 0;
    if (ValidarContraseña(contraseña) == false) {
        validar = false;
        alert("Error: 'Contraseña' debe tener 8 caracteres como maximo,con 2 letras, 2 numeros y 2 caracteres especiales.")
    }
    if (ValidarRepetirContraseña(contraRepetir) == false) {
        validar = false;
        alert("Error: Las contraseñas no son iguales.");
    }
    switch (valorRadio) {
        case "1":
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
                if (ValidarUltimoDigitoTarjeta() == false) {
                    validar = false;
                }
            }
            medioPago = "1";
            break;
        case "2":
            if(ValidarChecked(checkPagoFacil) == false && ValidarChecked(checkRapipago) == false){
                validar = false;
                alert("Error: Si se selecciona un 'Cupon de Pago', es necesario elegir tambien un medio de pago.")
            }
            medioPago = "2";
            break;
        case "3":
            medioPago = "3";
            break;
        default:
            validar = false;
            alert("Error: debe selecionar un medio de pago");
    }
    if (validar == true) {
        alert("Se han guardado los cambios");
        console.log("medioPago:" + medioPago);
        console.log("valorRadio:" + valorRadio);
        return medioPago;
        //window.location.href = "../index.html";
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

function ValidarChecked(checkSeleccionado) {
    if (checkSeleccionado.checked) {
        return true;
    } else {
        return false;
    }
}