// Formas de imprimir un objeto

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

// Concatenando cada valor de cada propiedad
console.log(persona.nombre + ', ' + persona);

// Iterando las propiedades
for (const prop in persona)
    console.log(persona[prop]);

// Ingresando directamente a los valores del objeto
console.log(Object.values(persona));

// Impresión peracida a un JSON
console.log(JSON.stringify(persona));
