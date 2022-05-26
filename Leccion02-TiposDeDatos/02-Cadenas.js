var nombre = 'Gandy';
var apellido = 'Avila';

// Concatenación de cadenas
var nombreCompleto = nombre + ' ' + apellido;

// No es necesario el uso de variables para la concatenación
var nombreCompleto2 = 'Esaú' + ' ' + 'Avila';

// Es posible concatenar los strings con otros tipos de datos, como por ejemplo los numericos
var x1 = nombre + 'A' + 23;

// Aquí no se hace la suma de 2 + 3 debido a que son tratados como cadenas
var x2 = nombre + 'A' + 2 + 3;

// En este caso si se hace la suma, debido al orden en que se ejecutan.
var x3 = nombre + 'A' + (2+3);

// En este caso, también realiza la suma, debido al orden que se ejecuta de izquierda a derecha
var x4 = 2 + 3 + nombre;

console.log(nombreCompleto);
console.log(nombreCompleto2);
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
