// Acceder a propiedades de objetos

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

// Acceso básico a las propiedades
console.log(persona.nombre);
console.log(persona.apellidos);

// Acceso mediante corchetes (como si fuera un array)
console.log(persona['nombre']);
console.log(persona['apellidos']);

// Recorrer todas las propiedades de un objeto
// for in
for (const prop in persona) {
    // Nombre de la propiedad
    console.log(prop);

    // Acceder al valor de la propiedad dentro del objeto
    console.log(persona[prop]);
} 
