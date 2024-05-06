// Conecta con la API para obtener los productos
export async function listaProductos() {
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
        throw error; // Propaga el error para manejarlo en otro lugar si es necesario
    }
}
