// Selecciona el formulario de registro
const formularioRegistro = document.querySelector('.principal__formulario');

// Selecciona el contenedor de productos
const contenedorProductos = document.querySelector('.productos-container');

// Escucha el evento de envío del formulario
formularioRegistro.addEventListener('submit', agregarProducto);

// Función para agregar un producto al contenedor de productos
function agregarProducto(event) {
    // Evita que el formulario se envíe
    event.preventDefault();

    // Obtén los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const cantidad = document.getElementById('cantidad').value;
    const tipoIVA = document.getElementById('tipo_iva').value;
    const descuento = document.getElementById('descuento').value;
    const urlImagen = document.getElementById('url').value;

    // Crea un nuevo elemento de producto
    const nuevoProducto = document.createElement('li');
    nuevoProducto.classList.add('producto');

    // Construye el contenido HTML del producto
    nuevoProducto.innerHTML = `
        <div class="producto__detalle">
            <h3>${nombre}</h3>
            <p>Categoría: ${categoria}</p>
            <p>Descripción: ${descripcion}</p>
            <p>Precio: $${precio}</p>
            <p>Cantidad: ${cantidad}</p>
            <p>Tipo de IVA: ${tipoIVA}</p>
            <p>Descuento: ${descuento}</p>
            <img src="${urlImagen}" alt="Imagen del producto">
        </div>
    `;

    // Agrega el nuevo producto al contenedor de productos
    contenedorProductos.appendChild(nuevoProducto);

    // Limpia el formulario después de agregar el producto
    formularioRegistro.reset();
}
