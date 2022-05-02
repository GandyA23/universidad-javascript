// Funciones como object

// Las funciones también pueden ser descritas como objetos
// Aunque su tipo de dato no sea uno de tipo object
console.log(typeof miFuncion);

// Entonces así como cualquier objeto, las funciones tienen metodos de los cuales nos podemos aprovechar
function miFuncion(a, b) {
    // arguments: variable dentro del objeto de la función
    console.log(arguments);
    console.log(arguments.length);

    return a+b;
}

console.log(miFuncion(1, 2));
console.log(miFuncion(3, 4));
console.log(miFuncion(5, 6));

// Método toString
console.log(miFuncion.toString());
