let caja = document.getElementById('Contenedor');
let btn = document.getElementById('btn');
let lista = document.getElementById('lista');

let orderId=1;

btn.addEventListener('click', () => {
    lista.style.display = 'block';
});

const opciones = lista.querySelectorAll('li');

opciones.forEach((opcion) => {
    opcion.addEventListener('click', () => {
        const nombrePlatillo = opcion.textContent;
        lista.style.display = 'none';

        const order = { id: orderId++, status: 'En Proceso', nombre: nombrePlatillo };
        addOrder(order);
        processOrder(order);
    });
});

function addOrder(order) {
    const card = document.createElement('div');
    card.id = `order-${order.id}`;
    card.classList.add('bg-white', 'text-black', 'font-bold', 'py-2', 'px-6', 'rounded', 'mt-2');
    card.textContent = `Pedido #${order.id} (${order.nombre}): ${order.status}`;
    caja.appendChild(card);
}

function updateOrderStatus(order, status) {
    const card = document.getElementById(`order-${order.id}`);
    if (card) {
        card.textContent = `Pedido #${order.id} (${order.nombre}): ${status}`;
    }
}

function esperarPreparacion(tiempo) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, tiempo);
    });
}

async function processOrder(order) {
    const tiempoAleatorio = Math.random() * 5000 + 3000; // entre 3 y 8 segundos
    await esperarPreparacion(tiempoAleatorio);
    updateOrderStatus(order, 'Completado');
}