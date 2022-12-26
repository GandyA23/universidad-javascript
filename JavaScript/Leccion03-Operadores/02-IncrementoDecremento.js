let a = 3, b = 2;
let z = a + b;

// Incremento
// Pre-incremento (Operador ++ antes de la variable)
// Primero se incrementa el valor y luego se asigna
z = ++a;
console.log(a);
console.log(z);

// Post-incremento (Operador ++ después de la variable)
// Primero se asigna el valor y luego se incrementa
z = b++;
console.log(b);
console.log(z);

// Decremento
// Pre-decremento (Operador -- antes de la variable)
// Primero se disminuye el valor y luego se asigna
z = --a;
console.log(a);
console.log(z);

// Post-decremento (Operador -- después de la variable)
// Primero se asigna el valor y luego se disminuye
z = b--;
console.log(b);
console.log(z);
