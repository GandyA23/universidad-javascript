/**
 * Palabra reservada async
 * async es una palabra reservada que va antes de un método, 
 * este método esta obligado a regresar una promesa.
 */
let promesa = new Promise((resolve) => {
    setTimeout(() => resolve('Saludos con promesa y timeout'), 3000);
});

// Definición de un método con async
async function miFnConPromesa () {
    return 'saludos con promesa y async';
}

// Es necesario usar paréntesis cuando es un método con async 
miFnConPromesa().then(response => console.log(response));
