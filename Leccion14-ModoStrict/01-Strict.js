/**
 * Modo strict
 * 
 * El modo estricto nos ayuda a evitar malas prácticas como el uso 
 * de variables sin antes haberlas declarado.
 */

// Activar el modo estricto
"use strict";

// No se ejecuta debido a que no esta definido
// x = 10;
// Lo correcto es 
let x = 10;
console.log(x);

// Es posible usarlo también dentro de funciones
function miFuncion () {
    "use strict";
    y = 15;
}
