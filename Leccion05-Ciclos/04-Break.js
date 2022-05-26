/* 
El uso de la palabra reservada break.

break nos ayuda a interrumpir la ejecución de cualquier ciclo.
(while, do-while, for).

Para que se interrumpla la ejecución, es necesario que la palabra reservada break se encuentre dentro
del bloque de código que ejecuta el ciclo.
*/

// Solo imprimir números pares
for (let i=1; i<=10; i++) {
    // En este caso, solo va a imprimir el primer número par
    // y la ejecución del ciclo terminará
    if (!(i % 2)) {
        console.log(i); 
        break;
    }
}
