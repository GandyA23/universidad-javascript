/* 
JS es Case Sensitive, esto quiere decir que no es lo mismo nombrar
una variable con mayúsculas o minúsculas.
*/

// Ambas son variables diferentes
let nombreCompleto = "Gandy Ávila Estrada";
let nombrecompleto = "Esaú Ávila Estrada";

// Las variables nunca pueden comenzar con un número
// let 1nombre = "Gandy"; // Marca error

// Los valores permitidos para declarar variables son:

// Mayúscula o minúscula
let Numero, numero;

// Guión bajo
let _numero;

// Signo de dolar
let $numero;

// No es posible usar una palabra reservada con un nombre de variable
// let null = null; // Marca error

// Sería posible de la siguiente forma
let $null = null;
let _null = null;

console.log(nombreCompleto);
console.log(nombrecompleto);
// console.log(NombreCompleto); // Esta variable nunca fue definida
console.log($null);
console.log(_null);
