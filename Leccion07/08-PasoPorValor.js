// Paso por valor
// Cuando se usan tipos de datos que no son objetos, por ejemplo: numericos o booleanos.
// Cuando se le pasa un valor primitivo a una función, realmente le pasa una copia, y no realiza cambios a la variable original

// Tipos primitivos: No se le asocian métodos ni propiedades
let x = 10;

function cambiarValor(a) {
    a = 20
}

// Imprime el valor original
console.log(x);

// Intenta cambiar el valor
cambiarValor(x);

// No fue posible hacer el cambio
console.log(x);
