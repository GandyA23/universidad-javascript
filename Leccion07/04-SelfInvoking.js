// Funciones Self-Invoking
// Estas funciones pueden son llamadas así mismas.

// Definición de una función self-invoking
// Esta función se ejecuta en este mismo momento
// También es una función anonima
// Pero no puede ser llamada de nuevo debido a que no tiene un nombre
(function () {
    console.log('Me estoy ejecutando');
})();

// Función self-invoking con argumentos
(function (nombre, apellidos) {
    console.log('Nombre:', nombre);
    console.log('Apellidos:', apellidos);
})('Gandy Esaú', 'Ávila Estrada');
