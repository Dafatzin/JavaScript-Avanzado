import './style.css';

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');
const Contenedorimg = document.getElementById('imagen'); 

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);
    Contenedorimg.innerHTML = ''
  if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
    } else if (numeroJugador === numeroSecreto) {
        mensaje.textContent = '¡Felicidades! ¡Adivinaste el número!';
        Contenedorimg.innerHTML = '<img src = "/RObten.jpg" alt="Ganaste">';

    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = 'El número es más alto.';
        Contenedorimg.innerHTML = '<img src = "RAlto.jpg" alt="Número más alto">';
    } else {
        mensaje.textContent = 'El número es más bajo.';
        Contenedorimg.innerHTML = '<img src = "RBajo.jpg" alt ="Número más bajo">'
    }
});