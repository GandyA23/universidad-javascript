/**
 * Función setTimeout
 * setTimeout nos ayuda a ejecutar un proceso una vez que se haya cumplido 
 * el tiempo establecido.
 */

// Llamadas asíncronas con uso de setTimeout
function miFuncionCallback () {
    console.log("Saludo asíncrono después de 3 seg");
}

// Se ejecuta segundo
// setTimeout necesita de dos parámetros, una función callback y la cantidad de tiempo a esperar en milisegundos. 
setTimeout(miFuncionCallback, 3000);

// Se ejecuta tercero
// Es posible mandar la función de las siguientes maneras
setTimeout(function () {
    console.log("Saludo asíncrono 2");
}, 4000);

// Se ejecuta primero
setTimeout(() => console.log("Salido asíncrono 3"), 1000);
