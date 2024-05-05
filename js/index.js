// Obtener todos los iconos de eliminar
const deleteIcons = document.querySelectorAll('.card-container--value img');

// Iterar sobre cada icono de eliminar
deleteIcons.forEach(icon => {
    // Agregar un evento de clic a cada icono
    icon.addEventListener('click', () => {
        // Obtener el elemento padre del icono (el figcaption)
        const figcaption = icon.parentNode;
        // Obtener el elemento padre del figcaption (el figure)
        const figure = figcaption.parentNode;
        // Obtener el elemento padre del figure (el article)
        const article = figure.parentNode;
        // Eliminar el article del DOM
        article.remove();
    });
});
