/**
 * Clases
 * La clase es una plantilla que posee atributos y métodos y
 * los objetos son instancias de estas clases. 
 */ 

// Definición de una clase
class Persona {
    // Constructor
    constructor (nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// Instancia de una clase (objeto)
const persona1 = new Persona("Gandy", "Ávila");
const persona2 = new Persona("Diego", "Gandara");

console.log(persona1);
console.log(persona2);
