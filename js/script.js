import { tiposError, mensajes } from "./customErrors.js";

const camposDeFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");
const enviarBoton = document.getElementById("enviar");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validar todos los campos antes de enviar el formulario
  camposDeFormulario.forEach((campo) => {
    const mensajeError = campo.parentNode.querySelector(".mensaje-error");
    const campoName = campo.getAttribute("name");
    if (!campo.value.trim()) {
      mensajeError.textContent = mensajes[campoName].valueMissing || "Este campo es requerido.";
    } else {
      mensajeError.textContent = "";
    }
  });

  // Validar si se ha seleccionado una categoría
  const categoriaSelect = document.getElementById("categoria");
  const mensajeErrorCategoria = categoriaSelect.parentNode.querySelector(".mensaje-error");
  if (!categoriaSelect.value) {
    mensajeErrorCategoria.textContent = mensajes.categoria.valueMissing || "Por favor, seleccione una categoría.";
    return; // Detener el envío del formulario si no se ha seleccionado una categoría
  }
  mensajeErrorCategoria.textContent = "";

  // Validar si se ha seleccionado un tipo de IVA
  const tipoIvaSelect = document.getElementById("tipo_iva");
  const mensajeErrorIva = tipoIvaSelect.parentNode.querySelector(".mensaje-error");
  if (!tipoIvaSelect.value) {
    mensajeErrorIva.textContent = mensajes.tipo_iva.valueMissing || "Por favor, seleccione un tipo de IVA.";
    return; // Detener el envío del formulario si no se ha seleccionado un tipo de IVA
  }
  mensajeErrorIva.textContent = "";

  // Si todos los campos están llenos y se han seleccionado las opciones requeridas, enviar el formulario
  const listaRespuestas = {
    nombre: e.target.elements["nombre"].value,
    categoria: e.target.elements["categoria"].value,
    precio: e.target.elements["precio"].value,
    cantidad: e.target.elements["cantidad"].value,
    tipo_iva: e.target.elements["tipo_iva"].value,
    descuento: e.target.elements["descuento"].value,
    url: e.target.elements["url"].value,
  };

  localStorage.setItem("registro", JSON.stringify(listaRespuestas));
  window.location.href = "./registrar.html";
});

enviarBoton.addEventListener("click", (e) => {
  // Validar todos los campos antes de enviar el formulario
  camposDeFormulario.forEach((campo) => {
    const mensajeError = campo.parentNode.querySelector(".mensaje-error");
    const campoName = campo.getAttribute("name");
    if (!campo.value.trim()) {
      mensajeError.textContent = mensajes[campoName].valueMissing || "Este campo es requerido.";
    } else {
      mensajeError.textContent = "";
    }
  });

  // Validar si se ha seleccionado una categoría
  const categoriaSelect = document.getElementById("categoria");
  const mensajeErrorCategoria = categoriaSelect.parentNode.querySelector(".mensaje-error");
  if (!categoriaSelect.value) {
    mensajeErrorCategoria.textContent = mensajes.categoria.valueMissing || "Por favor, seleccione una categoría.";
  } else {
    mensajeErrorCategoria.textContent = "";
  }

  // Validar si se ha seleccionado un tipo de IVA
  const tipoIvaSelect = document.getElementById("tipo_iva");
  const mensajeErrorIva = tipoIvaSelect.parentNode.querySelector(".mensaje-error");
  if (!tipoIvaSelect.value) {
    mensajeErrorIva.textContent = mensajes.tipo_iva.valueMissing || "Por favor, seleccione un tipo de IVA.";
  } else {
    mensajeErrorIva.textContent = "";
  }

  // Evitar el envío del formulario si algún campo no es válido
  camposDeFormulario.forEach((campo) => {
    if (!campo.value.trim()) {
      e.preventDefault();
    }
  });
});

camposDeFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificarCampo(campo) {
  let mensaje = "";
  campo.setCustomValidity("");
  // Campos validity
  tiposError.forEach((error) => {
    if (campo.validity[error]) {
      const campoName = campo.getAttribute("name");
      mensaje = mensajes[campoName][error];
    }
  });

  const mensajeError = campo.parentNode.querySelector(".mensaje-error");
  const validarInputCheck = campo.checkValidity();

  if (!validarInputCheck && mensaje) {
    mensajeError.textContent = mensaje;
  } else {
    mensajeError.textContent = "";
  }
}





/*import { tiposError, mensajes } from "./customErrors.js";

const camposDeFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");
const enviarBoton = document.getElementById("enviar");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // Validar todos los campos antes de enviar el formulario
  camposDeFormulario.forEach((campo) => {
    const mensajeError = campo.parentNode.querySelector(".mensaje-error");
    if (!campo.value.trim()) {
      mensajeError.textContent = "Este campo es requerido.";
    } else {
      mensajeError.textContent = "";
    }
  });

  // Validar si se ha seleccionado una categoría
  const categoriaSelect = document.getElementById("categoria");
  if (!categoriaSelect.value) {
    const mensajeErrorCategoria = categoriaSelect.parentNode.querySelector(".mensaje-error");
    mensajeErrorCategoria.textContent = "Por favor, seleccione una categoría.";
    return; // Detener el envío del formulario si no se ha seleccionado una categoría
  }

  // Validar si se ha seleccionado un tipo de IVA
  const tipoIvaSelect = document.getElementById("tipo_iva");
  if (!tipoIvaSelect.value) {
    const mensajeErrorIva = tipoIvaSelect.parentNode.querySelector(".mensaje-error");
    mensajeErrorIva.textContent = "Por favor, seleccione un tipo de IVA.";
    return; // Detener el envío del formulario si no se ha seleccionado un tipo de IVA
  }

  // Si todos los campos están llenos y se han seleccionado las opciones requeridas, enviar el formulario
  const listaRespuestas = {
    nombre: e.target.elements["nombre"].value,
    categoria: e.target.elements["categoria"].value,
    precio: e.target.elements["precio"].value,
    cantidad: e.target.elements["cantidad"].value,
    tipo_iva: e.target.elements["tipo_iva"].value,
    descuento: e.target.elements["descuento"].value,
    url: e.target.elements["url"].value,
  };

  localStorage.setItem("registro", JSON.stringify(listaRespuestas));
  window.location.href = "./registrar.html";
});

enviarBoton.addEventListener("click", () => {
  // Validar todos los campos antes de enviar el formulario
  camposDeFormulario.forEach((campo) => {
    const mensajeError = campo.parentNode.querySelector(".mensaje-error");
    if (!campo.value.trim()) {
      mensajeError.textContent = "Este campo es requerido.";
    } else {
      mensajeError.textContent = "";
    }
  });

  // Validar si se ha seleccionado una categoría
  const categoriaSelect = document.getElementById("categoria");
  if (!categoriaSelect.value) {
    const mensajeErrorCategoria = categoriaSelect.parentNode.querySelector(".mensaje-error");
    mensajeErrorCategoria.textContent = "Por favor, seleccione una categoría.";
  }

  // Validar si se ha seleccionado un tipo de IVA
  const tipoIvaSelect = document.getElementById("tipo_iva");
  if (!tipoIvaSelect.value) {
    const mensajeErrorIva = tipoIvaSelect.parentNode.querySelector(".mensaje-error");
    mensajeErrorIva.textContent = "Por favor, seleccione un tipo de IVA.";
  }

  // Evitar el envío del formulario si algún campo no es válido
  camposDeFormulario.forEach((campo) => {
    if (!campo.value.trim()) {
      e.preventDefault();
    }
  });
});

camposDeFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificarCampo(campo) {
  let mensaje = "";
  campo.setCustomValidity("");
  // Campos validity
  tiposError.forEach((error) => {
    if (campo.validity[error]) {
      mensaje = mensajes[campo.name][error];
    }
  });

  const mensajeError = campo.parentNode.querySelector(".mensaje-error");
  const validarInputCheck = campo.checkValidity();

  if (!validarInputCheck && mensaje) {
    mensajeError.textContent = mensaje;
  } else {
    mensajeError.textContent = "";
  }
}
*/


// FUNCIONA SELECCION
/*import { tiposError, mensajes } from "./customErrors.js";

const camposDeFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");
const enviarBoton = document.getElementById("enviar");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const listaRespuestas = {
    nombre: e.target.elements["nombre"].value,
    categoria: e.target.elements["categoria"].value,
    precio: e.target.elements["precio"].value,
    cantidad: e.target.elements["cantidad"].value,
    tipo_iva: e.target.elements["tipo_iva"].value,
    descuento: e.target.elements["descuento"].value,
    url: e.target.elements["url"].value,
  };

  // Validar si se ha seleccionado una categoría
  const categoriaSelect = document.getElementById("categoria");
  if (!categoriaSelect.value) {
    const mensajeErrorCategoria = categoriaSelect.parentNode.querySelector(".mensaje-error");
    mensajeErrorCategoria.textContent = "Por favor, seleccione una categoría.";
    return; // Detener el envío del formulario si no se ha seleccionado una categoría
  }

  // Validar si se ha seleccionado un tipo de IVA
  const tipoIvaSelect = document.getElementById("tipo_iva");
  if (!tipoIvaSelect.value) {
    const mensajeErrorIva = tipoIvaSelect.parentNode.querySelector(".mensaje-error");
    mensajeErrorIva.textContent = "Por favor, seleccione un tipo de IVA.";
    return; // Detener el envío del formulario si no se ha seleccionado un tipo de IVA
  }

  localStorage.setItem("registro", JSON.stringify(listaRespuestas));
  window.location.href = "./registrar.html";
});

enviarBoton.addEventListener("click", () => {
  // Verificar si se ha seleccionado una categoría
  const categoriaSelect = document.getElementById("categoria");
  if (!categoriaSelect.value) {
    const mensajeErrorCategoria = categoriaSelect.parentNode.querySelector(".mensaje-error");
    mensajeErrorCategoria.textContent = "Por favor, seleccione una categoría.";
  }

  // Verificar si se ha seleccionado un tipo de IVA
  const tipoIvaSelect = document.getElementById("tipo_iva");
  if (!tipoIvaSelect.value) {
    const mensajeErrorIva = tipoIvaSelect.parentNode.querySelector(".mensaje-error");
    mensajeErrorIva.textContent = "Por favor, seleccione un tipo de IVA.";
  }
});

camposDeFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificarCampo(campo) {
  let mensaje = "";
  campo.setCustomValidity("");
  // Campos validity
  tiposError.forEach((error) => {
    if (campo.validity[error]) {
      mensaje = mensajes[campo.name][error];
    }
  });

  const mensajeError = campo.parentNode.querySelector(".mensaje-error");
  const validarInputCheck = campo.checkValidity();

  if (!validarInputCheck && mensaje) {
    mensajeError.textContent = mensaje;
  } else {
    mensajeError.textContent = "";
  }
}
*/








/*import { tiposError, mensajes } from "./customErrors.js";

const camposDeFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");
const categoriaSelect = document.getElementById("categoria"); // Seleccionar el campo de categoría
const tipoIvaSelect = document.getElementById("tipo_iva"); // Seleccionar el campo de tipo de IVA

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const listaRespuestas = {
    nombre: e.target.elements["nombre"].value,
    categoria: e.target.elements["categoria"].value,
    precio: e.target.elements["precio"].value,
    cantidad: e.target.elements["cantidad"].value,
    tipo_iva: e.target.elements["tipo_iva"].value,
    descuento: e.target.elements["descuento"].value,
    url: e.target.elements["url"].value,
  };
  
  // Validar si se ha seleccionado una categoría
  if (!categoriaSelect.value) {
    const mensajeErrorCategoria = categoriaSelect.parentNode.querySelector(".mensaje-error");
    mensajeErrorCategoria.textContent = "Por favor, seleccione una categoría.";
    return; // Detener el envío del formulario si no se ha seleccionado una categoría
  }
  // Validar si se ha seleccionado un tipo de IVA
  if (!tipoIvaSelect.value) {
    const mensajeErrorIva = tipoIvaSelect.parentNode.querySelector(".mensaje-error");
    mensajeErrorIva.textContent = "Por favor, seleccione un tipo de IVA.";
    return; // Detener el envío del formulario si no se ha seleccionado un tipo de IVA
  }
  
  localStorage.setItem("registro", JSON.stringify(listaRespuestas));
  window.location.href = "./registrar.html";
});

camposDeFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificarCampo(campo) {
  let mensaje = "";
  campo.setCustomValidity("");
  // Verificar si el campo es un select
  if (campo.tagName === "SELECT") {
    // Validar si se ha seleccionado alguna opción
    if (!campo.value) {
      mensaje = "Por favor, seleccione una opción.";
    }
  } else {
    // Campos validity para otros tipos de campos
    tiposError.forEach((error) => {
      if (campo.validity[error]) {
        mensaje = mensajes[campo.name][error];
      }
    });
  }

  const mensajeError = campo.parentNode.querySelector(".mensaje-error");
  const validarInputCheck = campo.checkValidity();

  if (!validarInputCheck && mensaje) {
    mensajeError.textContent = mensaje;
  } else {
    mensajeError.textContent = "";
  }
}


// Limpiar el mensaje de error cuando se selecciona una opción
categoriaSelect.addEventListener("change", () => {
  const mensajeErrorCategoria = categoriaSelect.parentNode.querySelector(".mensaje-error");
  mensajeErrorCategoria.textContent = "";
});

// Limpiar el mensaje de error cuando se selecciona una opción
tipoIvaSelect.addEventListener("change", () => {
  const mensajeErrorIva = tipoIvaSelect.parentNode.querySelector(".mensaje-error");
  mensajeErrorIva.textContent = "";
});
*/


//FUNCIONA campo nombre
/*import { tiposError, mensajes } from "./customErrors.js";

const camposDeFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const listaRespuestas = {
    nombre: e.target.elements["nombre"].value,
    categoria: e.target.elements["categoria"].value,
    descripcion: e.target.elements["descripcion"].value,
    precio: e.target.elements["precio"].value,
    cantidad: e.target.elements["cantidad"].value,
    tipo_iva: e.target.elements["tipo_iva"].value,
    descuento: e.target.elements["descuento"].value,
    url: e.target.elements["url"].value,
  };
  localStorage.setItem("registro", JSON.stringify(listaRespuestas));
  window.location.href = "./registrar.html";
});

camposDeFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo));
  campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificarCampo(campo) {
  let mensaje = "";
  campo.setCustomValidity("");
  // Campos validity
  tiposError.forEach((error) => {
    if (campo.validity[error]) {
      mensaje = mensajes[campo.name][error];
    }
  });

  const mensajeError = campo.parentNode.querySelector(".mensaje-error");
  const validarInputCheck = campo.checkValidity();

  if (!validarInputCheck && mensaje) {
    mensajeError.textContent = mensaje;
  } else {
    mensajeError.textContent = "";
  }
}*/