let libreria = {
    "libros": [
        {"titulo": "El Principito", "autor": "Antoine de Saint-Exupéry", "genero": "Ficción", "disponible": true},
        {"titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": false},
        {"titulo": "Orgullo y Prejuicio", "autor": "Jane Austen", "genero": "Romance", "disponible": true}
    ]
};
const fs = require('fs');
function leerLibro(callback){
    setTimeout(() =>{
        fs.readFile('almacen.json', 'utf8', (err, data) => {
            if (err) {
                console.error("Error al leer el archivo:", err);
                return callback(null);
            }
            libreria = JSON.parse(data);
            console.log(libreria.libros);
            callback(libreria);
        });
    }, 1000);
}

function guardarLibreria(libreria, callback) {
    fs.writeFile('almacen.json', JSON.stringify(libreria, null, 4), () => {
        console.log("almacen.json actualizado correctamente.");
        callback && callback();
    });
}

function mostrarLibros(){
    leerLibro((datos) =>{
        console.log("Libros en la librería:");
        datos.libros.forEach((libro, index) =>{
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor}  (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    setTimeout(() => {
        fs.readFile('almacen.json', 'utf8', (err, data) => {
            if (err) {
                console.error("Error al leer el archivo:", err);
                return;
            }
            libreria = JSON.parse(data);
            libreria.libros.push(nuevoLibro);
            guardarLibreria(libreria, () => {
                console.log(`Libro agregado: "${nuevoLibro.titulo}"`);
            });
        });
    }, 1000);
}

function actualizarDisponibilidad(titulo, nuevoEstado) {
    setTimeout(() => {
       fs.readFile('almacen.json', 'utf8', (err, data) => {
            if (err) {
                console.error("Error al leer el archivo:", err);
                return;
            }
            libreria = JSON.parse(data);
            const libro = libreria.libros.find(libro => libro.titulo === titulo);
            if (libro) {
                libro.disponible = nuevoEstado;
                guardarLibreria(libreria, () => {
                    console.log(`Disponibilidad actualizada: "${libro.titulo}" ahora está ${nuevoEstado ? 'Disponible' : 'Prestado'}`);
                });
                 } else {
                console.log(`No se encontró el libro con título: "${titulo}"`);
            }
        });
    }, 1000);
}
mostrarLibros();
agregarLibro("El Principito 2", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("1984", false);