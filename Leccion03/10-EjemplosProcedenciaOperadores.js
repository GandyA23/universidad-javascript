// Tabla completa de la precedencia de operadores
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let x = 5, y = 10;
let z;

z = ++x + y--;
/*
Ejemplo 1:
 1.- x++, x = 6;
 2.- x + y = 11
 3.- y--, y = 9
 4.- z = 16
*/
console.log(x, y, z);

z = 4 + 5 * 6 / 3;
/*
Ejemplo 2:
 1.- 5 * 6 = 30
 2.- 30 / 3 = 10
 3.- 4 + 10 = 14
*/
console.log(z);

z = (4 + 5) * 6 / 3;
/*
Ejemplo 3:
 1.- 4 + 5 = 9
 2.- 9 * 6 = 54
 3.- 54 / 3 = 18
*/
console.log(z);
