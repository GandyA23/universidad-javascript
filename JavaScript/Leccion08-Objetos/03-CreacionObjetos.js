// Creación de objetos

// Creación de un Objeto con métodos
const persona = {
    // Propiedades
    nombre: 'Gandy Esaú',
    apellidos: 'Ávila Estrada',
    email: 'avila.gandy@gmail.com',
    edad: 20,

    // Métodos
    getNombreCompleto: function () {
        // this hace referencia al mismo objeto de persona
        return this.nombre + ' ' + this.apellidos;
    },
    getEmail: function () {
        return this.email;
    }
};

// Crear un nuevo objeto con new
// Crea una nueva referencia en memoria
let persona2 = new Object();

// Agrega propiedades de manera dinamica
persona2.nombre = 'Brian';
persona2.direccion = 'Calle Guayaba 30';
persona2.telefono = '1111111111';

// Acceder a las propiedades creadas
console.log(persona2.nombre);
console.log(persona2.direccion);
console.log(persona2.telefono);
