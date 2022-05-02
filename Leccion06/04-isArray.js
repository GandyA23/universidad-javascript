// Identificar si un objeto es un Array
const coches = {};
const numeroCoches = 10;
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];


// Método 1
// Apartir de la versión de ECMA 2015 se agrego el siguiente método
console.log(Array.isArray(autos));
console.log(Array.isArray(coches));
console.log(Array.isArray(numeroCoches));

// Método 2 
// Se pregunta si la instancia de la variable pertenece a un tipo específico. 
console.log(autos instanceof Array);
console.log(coches instanceof Array);
console.log(numeroCoches instanceof Array);
