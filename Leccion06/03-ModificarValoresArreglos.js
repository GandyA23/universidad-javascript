const autos = ['BMW', 'Mercedes Benz', 'Volvo'];

// Modificar un elemento en específico del arreglo
autos[1] = 'Ford';
console.log(autos[1]);

// Agregar nuevos elementos al arreglo
// Método 1
// Se agrega con el indice 2
autos.push('Tesla');
console.log(autos[2]);

// Método 2
// Es posible asignarlo en un indice inexistente
// La posición 5, 6, 7 y 8 se quedará vacío
autos[autos.length] = 'Audi';
autos[9] = 'Cadillac';

console.log(autos);
