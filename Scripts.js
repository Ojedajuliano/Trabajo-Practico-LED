var btnAbrirImagen = document.querySelectorAll('.Botom');
var imagenSeleccionada = document.querySelector('.Imagen');
var imagenContenedor = document.querySelector('.imgNuevo');
var quitar = document.querySelector ('.remove')

btnAbrirImagen.forEach(function(boton) {
    boton.addEventListener('click', function() {
        var campeon = boton.getAttribute('data-imagen');
        var urlImagen = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${campeon}_0.jpg`;
        imagenSeleccionada.src = urlImagen;
        imagenContenedor.style.display = 'flex';
    });
});

quitar.addEventListener('click', function(){

    imagenContenedor.style.display = 'none';}

)
function cargarCampeonesDesdeJson() {
    fetch('/Trabajo Practico LED/Dragontails/14.20.1/data/es_AR/championFull.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        return response.json(); // Convierte la respuesta en un objeto JSON
      })
      .then((data) => {
        mostrarCampeonDesdeJson(data.data); // Cargamos el primer campeón para probar
        mostrarCampeonDesdeJson(campeones[0]);
      })      .catch((error) => {
        console.error('Hubo un problema al cargar el archivo JSON:', error);
      });
  }
  
  // Función para mostrar la información del campeón desde el archivo JSON
function mostrarCampeonDesdeJson(campeon) {
    
    document.querySelector(".description").innerHTML = campeon.lore;
  

  }
  