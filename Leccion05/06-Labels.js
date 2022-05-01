/* 
El uso de etiquetas.

Las etiquetas nos ayudan a ir a una parte en específico
de nuestro código.

El uso de etiquetas se considera mala práctica.
*/

// Solo imprimir el primer número par
primerCiclo:
for (let i=1; i<=10; i++) {
    if (!(i % 2))
        // La etiqueta nos indica que ciclo va a romper
        // Presionando la tecla (ctr | cmd) + clic izquierdo pueder ir al inicio del ciclo     
        break primerCiclo;
    
    console.log(i);
}
