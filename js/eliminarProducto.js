import { conectaAPI } from "./conectaAPI.js";
import { mostrarProductos } from "./mostrar.js";

const listOfItems = document.querySelector('[data-lista]')

listOfItems.addEventListener('click', async (e) => {
  e.preventDefault()

  const itemId = e.target.dataset.id
  
  if (e.target.nodeName === 'IMG' && e.target.dataset.remove) {
    let itemDeleted = await conectaAPI.eliminarProducto(itemId)
    mostrarProductos()
  }
})