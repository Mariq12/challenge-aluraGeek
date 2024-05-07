import { conectaAPI } from "./conectaAPI.js";


const listaProductosContainer = document.querySelector("[data-lista]");

// Función para crear una tarjeta de producto en el DOM
function crearCard(url_imagen, nombre, precio, categoria) {
    const nuevaCard = document.createElement("article");
    nuevaCard.innerHTML = `
        <figure class="card" alt="${categoria}">
            <img class="card-container--img"
                width="100%"
                height="60%"
                src="${url_imagen}"
                alt="${categoria}">
            <figcaption class="card-container--info">
                <p class="card-container--title">${nombre}</p>
                <div class="card-container--value">
                    <p>$ ${precio.toFixed(2)}</p>
                    <img class="card-container--icon" src="./assets/icons/borrar.png" alt="Icono de eliminar">
                </div>
            </figcaption>
        </figure>
    `;
    return nuevaCard;
}

async function mostrarProductos() {
    try {
        const listaAPI = await conectaAPI.listaProductos();
        listaAPI.forEach(producto => {
            listaProductosContainer.appendChild(crearCard(producto.url_imagen, producto.nombre, producto.precio, producto.categoria));
        });
    } catch (error) {
        console.error("Error al obtener y mostrar los productos:", error);
        listaProductosContainer.innerHTML = `<h2 class="mensaje__titulo">No fue posible cargar la lista de productos</h2>`;
    }
}

mostrarProductos();