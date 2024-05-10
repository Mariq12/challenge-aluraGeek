import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

// Función para manejar el envío del formulario
async function crearProducto(evento) {
    evento.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    // Obtener los valores del formulario
    const url_imagen = document.querySelector("[data-url]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const precio = parseFloat(document.querySelector("[data-precio]").value);
    const cantidad = parseFloat(document.querySelector("[data-cantidad]").value);
    const tipo_iva = document.querySelector("[data-tipo_iva]").value;
    const descuento = parseFloat(document.querySelector("[data-descuento]").value);

    const itemId = crypto.randomUUID();

    try {
       await conectaAPI.enviarProducto(temId, url_imagen, nombre, categoria, descripcion, precio, cantidad, tipo_iva, descuento);
        
        // Redirigir a la página de confirmación
        window.location.href = "../pages/producto-registrado.html";
    } catch (error) {
        console.error("Error al enviar el formulario:", error);
        alert("Ocurrió un error al registrar el producto. Por favor, inténtalo de nuevo más tarde.");
    }
}

// Escuchar el evento submit del formulario y llamar a la función enviarFormulario
formulario.addEventListener("submit",evento => crearProducto(evento)); 