/**
 * Funciones flecha
 */

// Aplicación de hoisting
// Función normal
miFuncion();

// Marca error
// miFuncionFlecha();

// Definición de una función clásica
function miFuncion () {
    console.log("Saludos desde mi función");
}

// Definición de una función flecha
// Es recomendable declarar la función flecha a una constante
// Con las funciones flecha no es posible aplicar hoisting
const miFuncionFlecha1 = () => {
    console.log("Saludos desde mi función flecha 1");
} 

// Cuando es una sola línea, no es necesario colocar llaves
const miFuncionFlecha2 = () => console.log("Saludos desde mi función flecha 2");

// Retorno de valores en funciones flecha (una sola línea)
const miFuncionFlecha3 = () => "Saludos desde mi función flecha 3";

// Retorno de valores en funciones flecha (bloqué de código)
const miFuncionFlecha4 = () =>  {
    console.log("Hola");
    return "Saludos desde mi función flecha 3";   
}

// Función con parámetros
const suma = (a, b) => a + b;

// Función con un solo parámetros
// Es posible ignorar los paréntesis
const saludar = nombre => `Hola ${nombre}`; 

// Uso de las funciones
miFuncion();
miFuncionFlecha1();
miFuncionFlecha2();
console.log(miFuncionFlecha3());
console.log(miFuncionFlecha4());
console.log(suma(1, 2));
console.log(suma(4, 5));
console.log(saludar("Gandy"));
