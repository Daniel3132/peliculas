const pelis =[
    {
        "name": "12 Hour Shift",
        "image": "img/12-hour-shift.png",
        "info": "Arkansas, 1999. Mandy es una enfermera drogadicta, quien no sólo roba medicinas a los pacientes, sino que financia su adicción robando órganos a pacientes fallecidos.las cosas comienzan a ponerse feas cuando una compañera de Mandy extravía un riñón."
    },
    {
      "name": "The Wasteland",
      "image": "img/the-wasteland.png",
      "info": "En el siglo XIX, la tranquilidad de una familia que vive aislada de la sociedad es rota por la presencia de una criatura aterradora que se alimenta del miedo. Entonces depende del pequeño Diego salvar a su madre de la bestia… y de sí misma."
    },
    {
      "name": "Don't be afraid of the dark",
      "image": "img/dont-be-afraid-of-the-dark.png",
      "info": "Sally se muda a la mansión del siglo XIX que su padre y su novia están restaurando. Pronto descubre que no están solos. Al principio la niña piensa que es un juego, pero no tardará en descubrir que están en peligro."

    },
    {
      "name": "In the Earth",
      "image": "img/in-the-earth.png",
      "info":  "Mientras el mundo busca una cura para un devastador virus, un científico y una guardabosques se adentran en las profundidades de un bosque para realizar unas pruebas científicas. Al caer la noche, el viaje se convierte en un aterrador descenso al corazón de la más profunda oscuridad."

    },
    {
      "name": "Mimic",
      "image": "img/mimic.png",
      "info": "En Nueva York, una epidemia provocada por cucarachas desata una terrible enfermedad que afecta a niños.Susan Tyler logra crear una especie de insectos genéticamente modificados que ayudan a erradicar a las cucarachas.La especie sigue evolucionando para adaptarse a su siguiente presa: los humanos."

    },
    {
      "name": "The queen of spades",
      "image": "img/the-queen-of-spades.png",
      "info": "Cuatro adolescentes son amenazados por una entidad sobrenatural conocida como La Reina de Espadas, después de invocarla en un ritual con el objetivo de volverse famosos. La única esperanza es buscar al conocido cazafantasmas Smirnov."
    },
    {
      "name": "The medium",
      "image": "img/the-medium_.png",
      "info":"En la región de Isan en Tailandia, la médium de nombre Nim Tonvali, es la heredera del chamanismo de la Diosa Bayan. Durante un ritual de invocación, un miembro de su familia es poseído por el espíritu más diabólico jamás conocido por los chamanes de la región."
    },
    {
      "name": "Scream",
      "image": "img/scream.png",
      "info": "Veinticinco años después de que una racha de asesinatos brutales conmocionara a la tranquila ciudad de Woodsboro, Sidney Prescott regresa para investigar a un nuevo asesino que se ha puesto la máscara de Ghostface para acechar a un grupo de adolescentes."
    },
    {
      "name": "Reunion",
      "image": "img/reunion.png",
      "info": "Con Julia Ormond. Una mujer regresa a la casa de su infancia para pasar tiempo con su madre, de la que ha estado alejada durante mucho tiempo. Este reencuentro se convierte en una terrible pesadilla cuando empieza a recordar secretos de su pasado."
    }
]

const cartas = document.getElementById('cartas')
console.log(pelis)


const showMovies = (peliculas) =>{
     cartas.innerHTML = ``
     peliculas.forEach(element => {
        const {name, image, info} = element
        const pintarDiv = document.createElement('div')
        pintarDiv.classList.add('movies')

        pintarDiv.innerHTML = `
        <img src="${image}" alt="">
        <div class="movie-info">
            <h3>${name}</h3>
        </div>
        <div class="overview">
            ${info}
        </div>
        `
        cartas.appendChild(pintarDiv)
    });
}

showMovies(pelis)




const buscar = document.getElementById('formBuscar')

buscar.addEventListener('submit', (e)=>{
    e.preventDefault();
    const search = document.getElementById('search').value;
    const busqueda = pelis.filter(pelicula=> pelicula.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    showMovies(busqueda)
    

} )
