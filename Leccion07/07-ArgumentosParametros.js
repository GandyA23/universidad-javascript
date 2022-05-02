
// Los parámetros son la lista de variables al momento de declarar la función
// Los parámetros son: a y b
// b se le asigna el valor default de 5
let sumar = function(a, b = 5) {
    // Es posible acceder a los parámetros de la siguiente manera
    console.log(arguments[0]); 

    // En el caso donde no le manden ningún valor a b, esto imprimirá undefined
    console.log(arguments[1]); 

    // Es posible acceder a más argumentos
    console.log(arguments[2]);

    return a + b;
}

// Los argumentos son la lista de valores al momento de llamar la función
// Los argumentos son: 5 y 9
console.log(sumar(5, 9));

// No es necesario mandar todos los argumentos a la función
console.log(sumar(5));

// Caso donde arguments[2] imprime un valor diferente a undefined
console.log(sumar(1, 2, 3));
