/*
El arreglo en JS es de tipo Object que nos permite almacenar varios
valores en una misma variable.

Los indices van desde 0 - N, donde N es el número de elementos
dentro del arreglo. 
*/

// Definición del arreglo (antigua, no se recomienda)
// let autos = new Array('BMW', 'Mercedes Benz', 'Volvo');

// Debido a que la dirección de memoria del arreglo ya no se
// va a modificar, entonces es posible declararlo como const
// Lo que si se va a modificar, es su contenido
// Nueva forma de defición
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];

console.log(autos);
