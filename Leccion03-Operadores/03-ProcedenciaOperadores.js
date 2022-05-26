// Tabla completa de la precedencia de operadores
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

let a = 3, b = 2, c = 1, d = 4;

// Las operaciones se evalúan de izquierda a derecha, en este caso primero se realiza la multiplicación y después la suma.
let z = a * b + c;
console.log(z);

// En este caso da el mismo resultado que arriba, debido a que la multiplicación tiene mayor orden de prioridad que la suma. 
z = c + a * b;
console.log(z);

// Orden de ejecución
// 1.- Multiplicación 
// 2.- División 
// 3.- Suma 
z = a * b + c / d;
console.log(z);

// Orden de ejecución
// 1.- Multiplicación 
// 2.- División 
// 3.- Suma
z = c + a * b / d;
console.log(z);

// En este caso se realiza primero lo que se encuentre en paréntesis
// Orden de ejecución
// 1.- Suma 
// 2.- Multiplicación
// 3.- División
z = (c + a) * b / d;
console.log(z);
