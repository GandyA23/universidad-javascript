// Tipos de datos

// Definición de los tipos de datos
// String: Cadena de caracteres
var nombre = "Gandy";

/*
Las variables de JavaScript son dinámicas, eso quiere decir que los valores de las variables pueden cambiar durante la ejecución del código. 
*/
nombre = "Esaú";

// Incluso es posible cambiarlo de tipo de dato
nombre = 10;

// Numerico
var numero = 1000;

// Objeto (Object)
var objeto = {
    nombre: "Gandy",
    apellido: "Ávila",
    telefono: "1111111111"
};

// boolean (true o false)
var bandera = true;
bandera = false;

// function
function miFuncion(){}

// Symbol
var simbolo = Symbol("Mi simbolo");

// Clase (class)
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// undefined
var x;
x = undefined;

// null = ausencia de valor
var y = null;

// Array (aunque también es considerado object)
var autos = ['BMW', 'AUdi', 'Volo'];

// Impresión de su tipo de dato
// typeof es una palabra reservada que ayuda a saber el tipo de dato de una variable
console.log(typeof nombre);
console.log(typeof nombre);
console.log(typeof objeto);
console.log(typeof bandera);
console.log(typeof miFuncion);
console.log(typeof simbolo);
// Las clases en JS también cuentan como funciones 
console.log(typeof Persona);
console.log(typeof x);
console.log(typeof y);
console.log(typeof autos);

// Impresión del valor de cada una de las variables
console.log(nombre);
console.log(numero);
console.log(objeto);
console.log(bandera);
console.log(miFuncion);
console.log(simbolo);
console.log(x);
console.log(y);
console.log(autos);
