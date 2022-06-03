/**
 * Combinación de llamadas asíncronas, funciones callback y setTimeout
 */

// No es obligatorio manejar los dos parámetros
let promesa = new Promise((resolve) => {
    console.log('Inicio promesa');
    setTimeout(() => resolve('Saludos con promesa y timeout'), 3000);
    // El mensaje de 'Fin promesa' se imprime antes en consola debido a la espera
    // que tiene la función setTimeout
    console.log('Fin promesa');
});

promesa.then(response => console.log(response));
