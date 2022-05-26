/**
 * Hoisting en clases
 * Es necesario definir la clase y después usarla, 
 * no es posible aplicar hoisting a las clases
 */

// Esto marcaría un error 
// Debido a que se encuentra antes de la definición de la clase.
// const persona = new Persona();

class Persona {
    constructor (nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre () {
        return this._nombre;
    }

    get apellido () {
        return this._apellido;
    }

    set nombre (nombre) {
        this._nombre = nombre;
    }

    set apellido (apellido) {
        this._apellido = apellido;
    }
}

// Esto ya no marca error, debido a que la clase Persona ya fue definida
const persona1 = new Persona("Gandy", "Ávila");

persona1.nombre = "Esaú";
persona1.apellido = "Estrada";

console.log(persona1.nombre);
console.log(persona1.apellido);

