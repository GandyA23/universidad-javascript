// Conversión de String a Number
// Principalmente, para evitar inconsistencias en los cálculos numéricos. 
const ADULTO = 18;
let num1 = "10";
let num2 = "19";
console.log(typeof num1);
console.log(typeof num2);

// Verificar que tiene suficiente edad para votar con operador ternario
// Conversión con la función Number
let edad1 = Number(num1);
let edad2 = Number(num2);
console.log(typeof edad1);
console.log(typeof edad2);

console.log(edad1 >= ADULTO ? "PUEDE VOTAR!" : "NO PUEDE VOTAR");
console.log(edad2 >= ADULTO ? "PUEDE VOTAR!" : "NO PUEDE VOTAR");

