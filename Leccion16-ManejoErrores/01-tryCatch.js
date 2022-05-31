/**
 * try-catch
 * 
 * try-catch nos ayudará a continuar con la ejecución de nuestro programa 
 * cuando un bloque de código ha generado una excepción.
 */
"use strict";

// Estructura de un try-catch
try {
    // Error intencionado
    x = 10;
} catch (error) {
    // En esta sección nos ayuda a atrapar el error y se ejecutará el 
    // bloque de código cuando surja un error dentro de la sección try
    console.log(error);
} finally {
    // Esta sección es opcional, pero siempre se ejecutará después de 
    // atrapar el error o que el try se ejecute sin ningún error
    console.log("Termina la revisión de errores");
}

console.log("Continuamos");
