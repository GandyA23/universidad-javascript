/**
 * Promesas
 * En las promesas solo puede haber dos caminos, 
 * el resultado satisfactorio (.then) o el error (.catch)
 * Se usan mucho las funciones callback.
 */

// La promesa recibe una función que recibe dos parámetros
// 1.- Una función callback por si es un resultado satisfactorio
// 2.- Una función callback por si es un ocurrio un error
// Definición de una promesa
let miPromesa = new Promise((resolve, rejected) => {
    let expresion = true;

    // Caso satisfactorio
    if (expresion) resolve('Resolvió correcto');
    
    // Caso de error
    else rejected('Se produjo un error');
});

// Es posible manejar la promesa de dos maneras

// Primera opción
// El método then recibe dos funciones callback
miPromesa.then(
    // Se ejecuta cuando el caso es satisfactorio
    response => console.log(response),

    // Se ejecuta cuando el caso es de error
    error => console.log(error)
);

// Segunda opción
miPromesa
    // Se ejecuta cuando el caso es satisfactorio
    .then(response => console.log(response))
    
    // Se ejecuta cuando el caso es de error
    .catch(error => console.log(error));
