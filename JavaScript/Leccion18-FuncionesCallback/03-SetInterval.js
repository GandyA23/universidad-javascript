/**
 * Función SetInterval
 * setInterval ejecuta la ejecución callback cada tiempo que se le haya establecido.
 */

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
};

// Llama a la función reloj en in intervalo de 1 segundo
setInterval(reloj, 1000);
