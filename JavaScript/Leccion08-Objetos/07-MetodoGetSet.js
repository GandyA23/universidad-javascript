// Método Get y Set

// Creación de un Objeto con métodos
const persona = {
    // Propiedades
    nombre: 'Gandy Esaú',
    apellidos: 'Ávila Estrada',
    email: 'avila.gandy@gmail.com',
    edad: 20,
    idioma: 'es',

    // Declaración de métodos set
    set lang(lang) {
        this.idioma = lang.toUpperCase();
    },

    // Declaración de los métodos get
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellidos;
    },

    get lang() {
        return this.idioma.toUpperCase();
    }
};

// Impresión del objeto original
console.log(persona);

// Llamar al método get
// Aunque sea una función, no es necesario usar parentesís
console.log(persona.nombreCompleto);

console.log(persona.lang);

// Llamar al método set
// Aunque sea una función, no es necesario usar parentesís
persona.lang = 'en';

// Impresión del objeto con la modificación del set
console.log(persona);
