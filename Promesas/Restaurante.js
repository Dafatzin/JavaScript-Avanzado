const mesasDisponibles = 5;

function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(mesasSolicitadas <= mesasDisponibles) {
        resolve('Mesas disponibles:' + mesasDisponibles);
      } else {
        reject('No hay suficientes mesas disponibles');
      }
    }, 2000);
  });
}

function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() > 0.2) {
        resolve('Reserva confirmada para ' + nombreCliente);
      } else {
        reject('Error al confirmar la reserva');
      }
    }, 1500);
  });
}

async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(disponibilidad);
    console.log(confirmacion);
    
  } catch (error) {
    console.log("Error:", error);
  }
}

hacerReserva("Juan Pérez", 3);
hacerReserva("María López", 6);