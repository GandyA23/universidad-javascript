// El resultado de los operadores de comparación siempre va a ser verdadero o falso

let a = 3, b = 2, c = "3";
let z;

// Igual
// Revisa el valor sin importar el tipo
z = a == c;
console.log(z);

// Igual (estricto)
// Revisa el valor y el tipo, ambos deben de coincidir para que sea true
// Si los tipos son distintos, entonces es false
z = a === c;
console.log(z);

// Distinto
z = a != c;
console.log(z);

// Distinto (estricto)
z = a !== c;
console.log(z);

// Menor
z = a < b;
console.log(z);

// Menor o igual
z = a <= b+1;
console.log(z);

// Mayor
z = a > b+1;
console.log(z);

// Mayor o igual
z = a >= b;
console.log(z);
