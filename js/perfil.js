window.onload = function(){
    var cerrarSesion = document.getElementById("botonCancelar");
    if(ComprobarInicioSesion()!=false){
        cerrarSesion.hidden = false;
    }
    cerrarSesion.addEventListener("click", CerrarSesion);
}

function ComprobarInicioSesion(){
    if(localStorage.length===0){
        return false;
    }
}

function CerrarSesion(){
    localStorage.clear();
    window.location.href = "../index.html"
}