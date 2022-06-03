/**
 * Funciones callback
 * Una función callback es una función que se pasa 
 * como parámetro en otra función
 */

// Funciones secuenciales
function miFuncion1 () {
    console.log("Mi función 1");
}

function miFuncion2 () {
    console.log("Mi función 2");
}

// Orden secuencial
miFuncion1();
miFuncion2();

// Ejemplo del llamado y uso de una función callback
// Aquí recibe la función con el parámetro callback
function sumar (a, b, callback) {
    let res = a + b;
    callback(`El resultado es ${res}`);
}

function imprimir (mensaje) {
    console.log(mensaje);
}

sumar(5, 3, imprimir);
