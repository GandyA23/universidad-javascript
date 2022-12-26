/**
 * Get y Set 
 */ 

// Definición de una clase
class Persona {
    constructor (nombre, apellido) {
        // Se acostumbre que en nuestras propiedades, se coloque un _
        // ya que, las propiedades no se pueden llamar igual que los métodos
        this._nombre = nombre;
        this._apellido = apellido;
    }

    // Métodos get
    get nombre () {
        return this._nombre;
    }

    get apellido () {
        return this._apellido;
    }

    // Métodos set
    set nombre (nombre) {
        this._nombre = nombre;
    }

    set apellido (apellido) {
        this._apellido = apellido;
    }
}

// Instancia de una clase (objeto)
const persona1 = new Persona("Gandy", "Ávila");

// Llamada de los métodos
// No es necesario el uso de paréntesis, debido a que es un método get y set.
persona1.nombre = "Esaú";
persona1.apellido = "Estrada";

console.log(persona1.nombre);
console.log(persona1.apellido);
