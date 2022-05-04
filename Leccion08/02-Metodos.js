// Métodos dentro de un objeto

// Objeto con métodos
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

// Llamar a los métodos
console.log(persona.getNombreCompleto());
console.log(persona.getEmail());
