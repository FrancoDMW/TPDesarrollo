const items = [
    {
        id: 'pelicula1',
        titulo: 'JUMANJI',
        formato: 'pelicula',
        genero: 'accion',
        imagen: '../assets/images/Peliculas/01_Jumanji.jpg',
        descripcion: 'La historia inicia exactamente un año después de los acontecimientos de la primera película...'
    },
    {
        id: 'pelicula2',
        titulo: 'OBLIVION',
        formato: 'pelicula',
        genero: 'fantasia',
        imagen: '../assets/images/Peliculas/02_Oblivion.jpg',
        descripcion: 'Año 2077. Hace más de sesenta años la Tierra fue atacada por Extraterrestres...'
    },
    {
        id: 'pelicula3',
        titulo: 'INCEPTION',
        formato: 'pelicula',
        genero: 'accion',
        imagen: '../assets/images/Peliculas/03_Inception.jpg',
        descripcion: 'Dom Cobb (Leonardo DiCaprio) es un ladrón, prófugo de la justicia estadounidense...'
    },
    {
        id: 'serie1',
        titulo: 'BRIDGERTON',
        formato: 'serie',
        genero: 'drama',
        imagen: '../assets/images/Series/01_Bridgerton.jpg',
        descripcion: 'Bridgerton es una serie dramática de época de televisión web estadounidense...'
    },
    {
        id: 'serie2',
        titulo: 'THE WITCHER',
        formato: 'serie',
        genero: 'accion',
        imagen: '../assets/images/Series/02_Witcher.jpg',
        descripcion: 'Geralt de Rivia es un brujo, mutado durante su infancia para ser más efectivo...'
    },
    {
        id: 'serie3',
        titulo: 'THE LAST OF US',
        formato: 'serie',
        genero: 'drama',
        imagen: '../assets/images/Series/03_LastOfUs.jpg',
        descripcion: 'En 2003, un hongo desencadena una pandemia mundial y convierte a sus víctimas...'
    },
    {
        id: 'pelicula4',
        titulo: 'AKIRA',
        formato: 'pelicula',
        genero: 'accion',
        imagen: '../assets/images/Peliculas/04_Akira.jpg',
        descripcion: 'En el año 2019, han pasado 30 años desde que una explosión que destruyó por...'
    },
    {
        id: 'pelicula5',
        titulo: 'INTERSTELLAR',
        formato: 'pelicula',
        genero: 'fantasia',
        imagen: '../assets/images/Peliculas/05_Interstellar.jpg',
        descripcion: 'En 2067, la destrucción de las cosechas en la Tierra ha hecho que la...'
    },
    {
        id: 'pelicula6',
        titulo: 'GLADIADOR',
        formato: 'pelicula',
        genero: 'accion',
        imagen: '../assets/images/Peliculas/06_Gladiador.jpg',
        descripcion: 'En el año 180 d. C. el general hispanorromano Máximo Décimo Meridio (Russell Crowe)...'
    },
    {
        id: 'serie4',
        titulo: 'MERLINA',
        formato: 'serie',
        genero: 'fantasia',
        imagen: '../assets/images/Series/04_Merlina.jpg',
        descripcion: 'Merlina Addams, una estudiante de secundaria, encuentra a su hermano...'
    },
    {
        id: 'serie5',
        titulo: 'DARK',
        formato: 'serie',
        genero: 'drama',
        imagen: '../assets/images/Series/05_Dark.png',
        descripcion: 'Dark se situa en la ficticia ciudad de Winden...'
    },
    {
        id: 'serie6',
        titulo: 'YOU',
        formato: 'serie',
        genero: 'drama',
        imagen: '../assets/images/Series/06_You.jpg',
        descripcion: 'Joe Goldberg es un gerente de una librería que, al conocer a Guinevere Beck,...'
    },
    {
        id: 'pelicula7',
        titulo: 'STAR WARS',
        formato: 'pelicula',
        genero: 'fantasia',
        imagen: '../assets/images/Peliculas/07_StarWarsRetornoJedi.jpeg',
        descripcion: 'Hace mucho tiempo en una galaxia muy, muy lejana, Luke Skywalker ha...'
    },
    {
        id: 'pelicula8',
        titulo: 'EL CLUB DE LA PELEA',
        formato: 'pelicula',
        genero: 'accion',
        imagen: '../assets/images/Peliculas/08_ClubPelea.jpg',
        descripcion: 'El narrador (Edward Norton), que sufre de insomnio y cuyo nombre nunca se...'
    },
    {
        id: 'pelicula9',
        titulo: 'THE BATMAN',
        formato: 'pelicula',
        genero: 'accion',
        imagen: '../assets/images/Peliculas/09_TheBatman.jpg',
        descripcion: 'En Halloween, el alcalde de Gotham City Don Mitchell Jr. es asesinado por el...'
    },
    {
        id: 'serie7',
        titulo: 'TITANS',
        formato: 'serie',
        genero: 'accion',
        imagen: '../assets/images/Series/07_Titans.jpg',
        descripcion: 'Titanes sigue a los jóvenes superhéroes del equipo homónimo mientras luchan...'
    },
    {
        id: 'serie8',
        titulo: 'STRANGER THINGS',
        formato: 'serie',
        genero: 'fantasia',
        imagen: '../assets/images/Series/08_StrangerThings.jpg',
        descripcion: 'Stranger Things está ambientada en los años 1980. El Laboratorio Nacional Hawkins aparentemente realiza investigaciones...'
    },
    {
        id: 'serie9',
        titulo: 'PEAKY BLINDERS',
        formato: 'serie',
        genero: 'drama',
        imagen: '../assets/images/Series/09_Peaky.jpg',
        descripcion: 'Thomas "Tommy" Shelby, sus hermanos Arthur, John, Finn y su tía Polly Gray...'
    },
    {
        id: 'pelicula10',
        titulo: 'JURASSIC PARK',
        formato: 'pelicula',
        genero: 'accion',
        imagen: '../assets/images/Peliculas/10_Jurassic.jpg',
        descripcion: 'En isla Nublar, un empleado es asesinado por un dinosaurio durante...'
    },
    {
        id: 'pelicula11',
        titulo: 'JUSTICE LEAGUE',
        formato: 'pelicula',
        genero: 'accion',
        imagen: '../assets/images/Peliculas/11_JusticeLeague.png',
        descripcion: 'Alimentado por su restaurada fe en la humanidad e inspirado por el acto...'
    },
    {
        id: 'pelicula12',
        titulo: 'DUNE',
        formato: 'pelicula',
        genero: 'fantasia',
        imagen: '../assets/images/Peliculas/12_Dune.jpg',
        descripcion: 'En el año 10191, el duque Leto de la Casa Atreides, gobernante del planeta...'
    },
    {
        id: 'serie10',
        titulo: 'LOS SOPRANOS',
        formato: 'serie',
        genero: 'drama',
        imagen: '../assets/images/Series/10_Sopranos.jpeg',
        descripcion: 'Cuando Tony Soprano colapsa después de sufrir un ataque de pánico, comienza...'
    },
    {
        id: 'serie11',
        titulo: 'BREAKING BAD',
        formato: 'serie',
        genero: 'drama',
        imagen: '../assets/images/Series/11_Breaking.jpg',
        descripcion: 'Walter White es un frustrado profesor de química en un...'
    },
    {
        id: 'serie12',
        titulo: 'DEATH GAME',
        formato: 'serie',
        genero: 'drama',
        imagen: '../assets/images/Series/12_DeathsGame.jpg',
        descripcion: 'La serie cuenta la historia de Choi Yi-jae (Seo In-guk), quien al estar a...'
    }
];

function cargarPelis(categoria, formato, busqueda) {
    const container = document.querySelector('.gridImagenes');
    container.innerHTML = '';

    const pelisFiltradas = items.filter(item =>
        (categoria === 'all' || item.genero === categoria) &&
        (formato === 'all' || item.formato === formato) &&
        (busqueda === '' || item.titulo.toLowerCase().includes(busqueda.toLowerCase()))
    );

    pelisFiltradas.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'gridItem';
        itemDiv.innerHTML = `
            <a href="../pages/detalle${item.formato === 'pelicula' ? 'Peli' : 'Serie'}.html">
                <img src="${item.imagen}" alt="${item.id}">
                <div class="text">
                    <h3>${item.titulo}</h3>
                    <p class="pCartel">${item.descripcion}</p>
                </div>
            </a>
        `;
        container.appendChild(itemDiv);
    });
}

document.getElementById('selectCat').addEventListener('change', function () {
    const categoriaSeleccionada = this.value === 'all' ? 'all' : this.options[this.selectedIndex].text.toLowerCase();
    const busqueda = document.getElementById('busqueda').value;
    cargarPelis(categoriaSeleccionada, 'all', busqueda);
});

document.getElementById('aSeries').addEventListener('click', function () {
    const busqueda = document.getElementById('busqueda').value;
    cargarPelis('all', 'serie', busqueda);
});

document.getElementById('aPeliculas').addEventListener('click', function () {
    const busqueda = document.getElementById('busqueda').value;
    cargarPelis('all', 'pelicula', busqueda);
});

document.getElementById('busqueda').addEventListener('input', function () {
    const busqueda = this.value;
    const categoriaSeleccionada = document.getElementById('selectCat').value === 'all' ? 'all' : document.getElementById('selectCat').options[document.getElementById('selectCat').selectedIndex].text.toLowerCase();
    const formato = document.querySelector('.aNav.active')?.id === 'aSeries' ? 'serie' : document.querySelector('.aNav.active')?.id === 'aPeliculas' ? 'pelicula' : 'all';
    cargarPelis(categoriaSeleccionada, formato, busqueda);
});

window.onload = function () {
    cargarPelis('all', 'all', '');
};