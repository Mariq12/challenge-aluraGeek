import { listaProductos } from "./conectaAPI.js";


const listaProductosContainer = document.querySelector("[data-lista]");

// Función para crear una tarjeta de producto en el DOM
function crearCard(nombre, precio, imagen, categoria) {
    const nuevaCard = document.createElement("article");
    nuevaCard.innerHTML = `
        <figure class="card" alt="${categoria}">
            <img class="card-container--img"
                width="100%"
                height="60%"
                src="${imagen}"
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
        const listaAPI = await listaProductos();
        listaAPI.forEach(producto => {
            listaProductosContainer.appendChild(crearCard(producto.nombre, producto.precio, producto.url_imagen, producto.categoria));
        });
    } catch (error) {
        console.error("Error al obtener y mostrar los productos:", error);
        listaProductosContainer.innerHTML = `<h2 class="mensaje__titulo">No fue posible cargar la lista de productos</h2>`;
    }
}

mostrarProductos();



/*import { listaProductos } from "./conectaAPI.js";


const listaProductosContainer = document.querySelector("[data-lista]");

// Función para crear una tarjeta de producto en el DOM
function crearCard(nombre, precio, imagen, categoria) {
    const nuevaCard = document.createElement("article");
    nuevaCard.innerHTML = `
        <figure class="card" alt="${categoria}">
            <img class="card-container--img"
                width="100%"
                height="60%"
                src="${imagen}"
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
        const listaAPI = await listaProductos();
        listaAPI.forEach(producto => {
            listaProductosContainer.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen, producto.categoria));
        });
    } catch (error) {
        console.error("Error al obtener y mostrar los productos:", error);
        listaProductosContainer.innerHTML = `<h2 class="mensaje__titulo">No fue posible cargar la lista de productos</h2>`;
    }
}

mostrarProductos();
*/


/*import { listaProductos } from "./conectaAPI.js";


const listaProductosContainer = document.querySelector("[data-lista]");

// Función para crear una tarjeta de producto en el DOM
function crearCard(nombre, precio, imagen, categoria) {
    const nuevaCard = document.createElement("article");
    nuevaCard.innerHTML = `
        <figure class="card" alt="${categoria}">
            <img class="card-container--img"
                width="100%"
                height="60%"
                src="${imagen}"
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
        const listaAPI = await listaProductos();
        listaAPI.forEach(producto => {
            listaProductosContainer.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen, producto.categoria));
        });
    } catch (error) {
        console.error("Error al obtener y mostrar los productos:", error);
        listaProductosContainer.innerHTML = `<h2 class="mensaje__titulo">No fue posible cargar la lista de productos</h2>`;
    }
}

mostrarProductos();

*/
/*import { conectaAPI } from "./conectaAPI.js";

const listaProductos = document.querySelector("[data-lista]");

// Función para crear una tarjeta de producto al DOM
function crearCard(nombre, precio, imagen, categoria) {
    const nuevoProducto = document.createElement("figure");
    nuevoProducto.className="card";
    nuevoProducto.innerHTML = `<figure class="card" alt="${categoria}">
            <img class="card-container--img"
                width="100%"
                height="60%"
                src="${imagen}"
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
    return nuevoProducto;
}

async function listaProductos() {
    try{
        const listaAPI = await conectaAPI.listaProductos();
        listaAPI.forEach(producto => lista
            .appendChild(crearCard(producto.nombre, producto.precio,producto.imagen, producto.categoria)));
    }catch{
        lista.innerHTML=`<h2 class="mensaje__titulo">No fue posible cargar la lista de videos</h2>`;
    }
}

listaProductos();
*/

/*async function listaProductos() {
    try{
        const listaAPI = await conectaAPI.listaProductos();
        listaAPI.forEach(producto => lista
            .appendChild(crearCard(producto.titulo, producto.descripcion, producto.url, producto.imagen)));
    }catch{
        lista.innerHTML=`<h2 class="mensaje__titulo">No fue posible cargar la lista de videos</h2>`;
    }
}

listaProductos();
*/