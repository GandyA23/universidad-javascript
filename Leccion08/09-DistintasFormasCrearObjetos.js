// Distintas formas de crear Objetos

// Con función constructor
// Nota: No es la mejor práctica
function Persona(nombre = 'Gandy', apellido = 'Ávila', email = 'gandy@gmail.com') {
    // Propiedades
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    // Métodos
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}

const objeto1 = new Persona();

// Con palabra reservada new y Object()
const objeto2 = new Object();

// Solo con llaves (más recomendable)
const objeto3 = {}; 

// Creación de objetos relacionada con tipos de datos

// String
// Poco recomendable
let string1 = new String('Hola!'); 
// Recomendable (simplificado)
let string2 = 'Hola!';

// Number
// Poco recomendable
let num1 = new Number(1);
// Recomendable (simplificado)
let num2 = 1;

// Boolean
// Poco recomendable
let bool1 = new Boolean(false);
// Recomendable (simplificado)
let bool2 = false;

// Array
// Poco recomendable
let array1 = new Array();
// Recomendable (simplificado)
let array2 = [];

// function
// Poco recomendable
let function1 = new Function();
// Recomendable (simplificado)
let function2 = function() {
    // Bloque de código
};
