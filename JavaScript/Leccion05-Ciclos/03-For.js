// Todos los ciclos ejecutan su bloque de código siempre y cuando las condición sea verdadera

/*
for para
El ciclo for cuenta con tres secciones

for (inicialización; condición; incremento) {
    // bloque de código
}

Se ejecuta en el siguiente orden:
    1.- Inicialización
    2.- Verifica condición, si true paso 3 sino termina la ejecución del ciclo
    3.- Ejecuta el bloque de código
    4.- Incrementa o decrementa
    5.- Vuelve al paso 2
*/

for (let i=0; i<3; i++)
    console.log(i);

for (let i=1; i<=3; i++)
    console.log(i);
