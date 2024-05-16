// script.js

// Función para buscar una película
function buscarPelicula() {
    const busquedaInput = document.getElementById('busquedaInput').value.toLowerCase();
    const peliculas = document.getElementsByClassName('pelicula');

    for (let pelicula of peliculas) {
        const titulo = pelicula.getElementsByClassName('titulo')[0].textContent.toLowerCase();
        if (titulo.includes(busquedaInput)) {
            pelicula.style.display = '';
        } else {
            pelicula.style.display = 'none';
        }
    }
}

// Event listener para el campo de búsqueda
document.getElementById('busquedaInput').addEventListener('input', buscarPelicula);