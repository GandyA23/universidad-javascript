/**
 * throw
 * La palabra reservada throw nos ayuda a ejecutar un error personalizado para
 * que pase a la sección de catch.
 * Es más que nada... informativo. 
 */
"use strict";

let resultado = -1;

try {
    if (isNaN(resultado)) throw "No es un número";
    else if (resultado === '') throw "Es una cadena vacía";
    else if (resultado >= 0) throw "Es un valor positivo";
    else if (resultado < 0) throw "Es un valor negativo";
} catch (error) {
    console.log(error);
}
