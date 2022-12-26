/*
Hacer uso de var ya se considera una mala práctica, 
es recomendable usar let o const.
*/

// Es posible declarar una variable sin necesidad de usar las palabras reservadas var, let o const
// NOTA: no es una buena práctica.
// nombre = "Gandy";

// Es posible hacerlo en líneas diferentes
let nombre;
nombre = "Gandy";
console.log(nombre);

// La característica principal de usar const, es que una vez definida, no será posible asignarle otro valor
const apellido = "Avila";

// Esto genera un error después de la definición
// apellido = "Estrada";
