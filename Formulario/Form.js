const regEvent = document.getElementById("registroEvento");

function marcarError(input, idMensaje, mensaje) {
  input.classList.remove("campo-valido");
  input.classList.add("campo-invalido");
  document.getElementById(idMensaje).textContent = mensaje;
}

function marcarValido(input, idMensaje) {
  input.classList.remove("campo-invalido");
  input.classList.add("campo-valido");
  document.getElementById(idMensaje).textContent = "";
}

regEvent.addEventListener ('submit', function(event) {
      event.preventDefault(); 

      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("email").value;
      const telefono = document.getElementById("telefono").value;
      const intereses = document.querySelectorAll('input[name="intereses"]:checked');
      const horario = document.querySelector('input[name="horario"]:checked');
      const fecha = document.getElementById("fecha").value;
      const hora = document.getElementById("hora").value;
      const campoArchivo = document.getElementById("archivo");
      const campoNombre = document.getElementById("nombre");
    const campoCorreo = document.getElementById("email");
     const campoTelefono = document.getElementById("telefono");

      let esValido = true;

      const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  if (nombre.trim() === "" || !soloLetras.test(nombre) || nombre.trim().split(" ").length < 2) {
     marcarError(campoNombre, "error-nombre", "Escribe tu nombre y apellido, solo letras.");
    esValido = false;
  } else {
    marcarValido(campoNombre, "error-nombre");
  }
const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!formatoCorreo.test(correo)) {
    marcarError(campoCorreo, "error-email", "Escribe un correo válido, ej: nombre@dominio.com");
    esValido = false;
  } else {
    marcarValido(campoCorreo, "error-email");
  }
  const diezDigitos = /^\d{10}$/;
  if (!diezDigitos.test(telefono)) {
    marcarError(campoTelefono, "error-telefono", "El teléfono debe tener exactamente 10 dígitos.");
    esValido = false;
  } else {
    marcarValido(campoTelefono, "error-telefono");
  }
  if (!esValido) {
    return;
  }
  alert("Registro exitoso. ¡Gracias por registrarte!");

});
