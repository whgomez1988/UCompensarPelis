$(document).ready(function() {
    $('#search-form').submit(function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        var searchTerm = $('#search-input').val().toLowerCase(); // Obtener el término de búsqueda en minúsculas

        // Filtrar las tarjetas de películas según el término de búsqueda
        $('.card').each(function() {
            var title = $(this).find('.card-title').text().toLowerCase(); // Obtener el título de la película en minúsculas
            var director = $(this).find('.director').text().toLowerCase(); // Obtener el nombre del director en minúsculas

            // Mostrar u ocultar la tarjeta según el criterio de búsqueda
            if (title.includes(searchTerm) || director.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});