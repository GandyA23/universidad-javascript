const autos = ['BMW', 'Mercedes Benz', 'Volvo'];

// Acceder a un elemento específico de un arreglo. 
console.log(autos[0]);
console.log(autos[2]);

// Recorrer todos los elementos
// Manera 1
for(let i=0; i<autos.length; i++) 
    console.log(i, autos[i]);

// Manera 2
// Esta manera no imprime los indices
for (const car of autos)
    console.log(car);
