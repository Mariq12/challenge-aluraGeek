// Conecta con la API para obtener los productos
async function listaProductos() {
    try {
        const conexion = await fetch("http://localhost:3001/productos", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });
        const conexionConvertida = await conexion.json();
        return conexionConvertida;
    } catch (error) {
        console.error("Error al conectar con la API:", error);
        throw error; 
    }
}
async function enviarProducto(url_imagen, nombre, categoria, descripcion, precio, cantidad, tipo_iva, descuento){
    const connection = await fetch('http://localhost:3001/productos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            url_imagen: url_imagen,
            nombre: nombre,
            categoria: categoria,
            descripcion: descripcion,
            precio: precio,
            cantidad: cantidad,
            tipo_iva: tipo_iva,
            descuento: descuento
        })
    })
    const connectionConvert = connection.json();
    if(!connection.ok){
        throw new Error("No es posible enviar el video");
    }
    return connectionConvert;
}

// Agrega esta función para eliminar un producto
async function eliminarProducto(id) {
    const connection = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
      });
      const convertConnection = connection.json();
    
      if (!connection.ok) {
        throw new Error("No se ha podido eliminar el producto");
      }
      
      return convertConnection;
    }

export const conectaAPI={
	listaProductos,enviarProducto,eliminarProducto
}