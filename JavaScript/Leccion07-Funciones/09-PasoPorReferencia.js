// Paso por referencia
// Cuando se usan tipos de datos que son objetos.

// Cuando se define un objeto, es buena práctica hacerlo con const
// La constante persona almacena la referencia de memoria de un objeto
const persona = {
    nombre: 'Gandy',
    apellidos: 'Ávila'
};

function cambiarValor(p1) {
    // p1 apunta a la misma dirección de memoria a persona
    p1.nombre = 'Esau';
    p1.apellidos = 'Estrada';
}

// Imprime el valor original
console.log(persona);

// Intenta cambiar el valor
// Debido a que apunta a la referencia de memoria, se cambiaran los valores
cambiarValor(persona);

// Cambia el valor
console.log(persona);
