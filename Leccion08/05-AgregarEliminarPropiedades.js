// Agregar y eliminar propiedades a un objeto 

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

// En caso de que la propiedad no exista, la agrega al objeto,
// si existe, entonces modifica el valor. 
// Agregar la propiedad de telefono
persona.telefono = '1111111111';

// Modifica la propiedad del telefono
persona.telefono = '2222222222';

console.log(persona);

// Eliminar la propiedad de telefono en el objeto
// delete = palabra reservada
delete persona.telefono;

console.log(persona);
