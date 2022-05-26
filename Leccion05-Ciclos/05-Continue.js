/* 
El uso de la palabra reservada continue.

continue nos ayuda a interrumpir la ejecución del
bloque de código y continuar con la siguiente
iteración. (while, do-while, for).

Para que continue con la siguiente iteración, 
es necesario que la palabra reservada continue se
encuentre dentro del bloque de código que ejecuta el ciclo.
*/

// Solo imprimir números pares
for (let i=1; i<=10; i++) {
    if (i % 2)
        // Cuando se ejecuta este continue, ya no se ejecutará la impresión en consola.
        continue;
    
    console.log(i);
}
