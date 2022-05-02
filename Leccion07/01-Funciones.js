/*
Una función es un código reutilizable, y podrá ser llamado las veces que sea necesario. 
*/

// Podrás llamar la función antes o después de declararla
// Gracias al Hoisting, todas las funciones las manda hasta arriba
miFuncion(5, 6);
miFuncion(7, 8);

// Declaración de una función
// Usar camelCase para nombrar funciones
// Esta función requiere de dos argumentos 
function miFuncion(a, b) {
    // Bloque de código
    console.log("Suma:", (a+b));
}

// Llamar a la función
miFuncion(1, 2);
miFuncion(3, 4);
