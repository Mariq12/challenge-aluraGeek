import { conectaAPI } from "./conectaAPI.js";

const listaProductosContainer = document.querySelector("[data-tablet]");

// Función para crear una fila de tabla con los datos de un producto
function crearFilaProducto(id, url_imagen, nombre, categoria, descripcion, precio, cantidad, tipo_iva, descuento) {
    const fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${id}</td>
        <td><img src="${url_imagen}" alt="Imagen de ${nombre}" style="width: 50px; height: auto;"></td>
        <td>${nombre}</td>
        <td>${categoria}</td>
        <td>${descripcion}</td>
        <td>$ ${precio.toFixed(2)}</td>
        <td>${cantidad}</td>
        <td>${tipo_iva}</td>
        <td>${descuento}%</td>
        <td class="container-icons">
            <figure class="icon-editar">
            <img src="../assets/icons/editar.png" alt="Icono de editar">
            </figure>
        </td>
        <td class="container-icons">
            <figure class="icon-eliminar">
            <img src="../assets/icons/borrar.png" data-remove="true" data-id="${id}"/>
            </figure>
        </td>
    `;
    return fila;
}

// Función para mostrar los productos en la tabla
export async function mostrarProductosEnTabla() {
    try {
        const listaAPI = await conectaAPI.listaProductos();
        listaAPI.forEach(producto => {
            listaProductosContainer.appendChild(crearFilaProducto(producto.id, producto.url_imagen, producto.nombre, producto.categoria, producto.descripcion, producto.precio, producto.cantidad, producto.tipo_iva, producto.descuento));
        });
    } catch (error) {
        console.error("Error al obtener y mostrar los productos:", error);
        listaProductosContainer.innerHTML = `<h2 class="mensaje__titulo">No fue posible cargar la lista de productos</h2>`;
    }
}

mostrarProductosEnTabla();
