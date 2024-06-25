window.onload = function () {
    var filtroSeries = document.getElementById("aSeries");
    var filtroPeliculas = document.getElementById("aPeliculas");
    filtroSeries.addEventListener("mouseover", function () {
        filtroSeries.style.cursor = "pointer";
    });
    filtroSeries.addEventListener("click", FiltrarSeries);
    filtroPeliculas.addEventListener("mouseover", function () {
        filtroPeliculas.style.cursor = "pointer";
    });
    filtroPeliculas.addEventListener("click", FiltrarPeliculas);
}

function FiltrarSeries() {
    var serie1 = document.getElementById("serie1");
    var serie2 = document.getElementById("serie2");
    var serie3 = document.getElementById("serie3");
    var serie4 = document.getElementById("serie4");
    var serie5 = document.getElementById("serie5");
    var serie6 = document.getElementById("serie6");
    var serie7 = document.getElementById("serie7");
    var serie8 = document.getElementById("serie8");
    var serie9 = document.getElementById("serie9");
    var serie10 = document.getElementById("serie10");
    var serie11 = document.getElementById("serie11");
    var serie12 = document.getElementById("serie12");

    var peli1 = document.getElementById("pelicula1");
    var peli2 = document.getElementById("pelicula2");
    var peli3 = document.getElementById("pelicula3");
    var peli4 = document.getElementById("pelicula4");
    var peli5 = document.getElementById("pelicula5");
    var peli6 = document.getElementById("pelicula6");
    var peli7 = document.getElementById("pelicula7");
    var peli8 = document.getElementById("pelicula8");
    var peli9 = document.getElementById("pelicula9");
    var peli10 = document.getElementById("pelicula10");
    var peli11 = document.getElementById("pelicula11");
    var peli12 = document.getElementById("pelicula12");

    if (serie1.hidden == false) {
        peli1.hidden = true;
        peli2.hidden = true;
        peli3.hidden = true;
        peli4.hidden = true;
        peli5.hidden = true;
        peli6.hidden = true;
        peli7.hidden = true;
        peli8.hidden = true;
        peli9.hidden = true;
        peli10.hidden = true;
        peli11.hidden = true;
        peli12.hidden = true;
        console.log("se apreto el boton escondiendo las pelis");
    }
    if (serie1.hidden == true) {
        peli1.hidden = true;
        peli2.hidden = true;
        peli3.hidden = true;
        peli4.hidden = true;
        peli5.hidden = true;
        peli6.hidden = true;
        peli7.hidden = true;
        peli8.hidden = true;
        peli9.hidden = true;
        peli10.hidden = true;
        peli11.hidden = true;
        peli12.hidden = true;

        serie1.hidden = false;
        serie2.hidden = false;
        serie3.hidden = false;
        serie4.hidden = false;
        serie5.hidden = false;
        serie6.hidden = false;
        serie7.hidden = false;
        serie8.hidden = false;
        serie9.hidden = false;
        serie10.hidden = false;
        serie11.hidden = false;
        serie12.hidden = false;
        console.log("se apreto el boton mientras las series estaban ocultas, asi que se activaron y se ocultaron las peliculas");
    }
}

function FiltrarPeliculas() {
    var serie1 = document.getElementById("serie1");
    var serie2 = document.getElementById("serie2");
    var serie3 = document.getElementById("serie3");
    var serie4 = document.getElementById("serie4");
    var serie5 = document.getElementById("serie5");
    var serie6 = document.getElementById("serie6");
    var serie7 = document.getElementById("serie7");
    var serie8 = document.getElementById("serie8");
    var serie9 = document.getElementById("serie9");
    var serie10 = document.getElementById("serie10");
    var serie11 = document.getElementById("serie11");
    var serie12 = document.getElementById("serie12");

    var peli1 = document.getElementById("pelicula1");
    var peli2 = document.getElementById("pelicula2");
    var peli3 = document.getElementById("pelicula3");
    var peli4 = document.getElementById("pelicula4");
    var peli5 = document.getElementById("pelicula5");
    var peli6 = document.getElementById("pelicula6");
    var peli7 = document.getElementById("pelicula7");
    var peli8 = document.getElementById("pelicula8");
    var peli9 = document.getElementById("pelicula9");
    var peli10 = document.getElementById("pelicula10");
    var peli11 = document.getElementById("pelicula11");
    var peli12 = document.getElementById("pelicula12");

    if (peli1.hidden == false) {
        serie1.hidden = true;
        serie2.hidden = true;
        serie3.hidden = true;
        serie4.hidden = true;
        serie5.hidden = true;
        serie6.hidden = true;
        serie7.hidden = true;
        serie8.hidden = true;
        serie9.hidden = true;
        serie10.hidden = true;
        serie11.hidden = true;
        serie12.hidden = true;
        console.log("se apreto el boton escondiendo las series");
    }
    if (peli1.hidden == true) {
        peli1.hidden = false;
        peli2.hidden = false;
        peli3.hidden = false;
        peli4.hidden = false;
        peli5.hidden = false;
        peli6.hidden = false;
        peli7.hidden = false;
        peli8.hidden = false;
        peli9.hidden = false;
        peli10.hidden = false;
        peli11.hidden = false;
        peli12.hidden = false;

        serie1.hidden = true;
        serie2.hidden = true;
        serie3.hidden = true;
        serie4.hidden = true;
        serie5.hidden = true;
        serie6.hidden = true;
        serie7.hidden = true;
        serie8.hidden = true;
        serie9.hidden = true;
        serie10.hidden = true;
        serie11.hidden = true;
        serie12.hidden = true;
        console.log("se apreto el boton mientras las peliculas estaban ocultas, asi que se activaron y se ocultaron las series");
    }
}