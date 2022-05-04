// Objetos
// La principal diferencia entre un dato primitivo y un objeto, el tipo primitivo, no cuenta con propiedades o métodos. 

// Por ejemplo
// Tipo primitivo
let x = 10;

// Marca error
// console.log(x.length);

// Se crea una referencia en memoria, y esta referencia se le asigna a la variable persona
const persona = {
    nombre: 'Gandy Esaú',
    apellidos: 'Ávila Estrada',
    email: 'avila.gandy@gmail.com',
    edad: 20
};

// Acceder a propiedades específicas
console.log(persona.nombre);
console.log(persona.apellidos);
console.log(persona.email);
console.log(persona.edad);

// Imprimir todo el objeto
console.log(persona);

