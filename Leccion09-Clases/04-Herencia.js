/**
 * Herencia
 */

// Clase Padre
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

    // Método
    nombreCompleto () {
        return this._nombre + ' ' + this._apellido;
    }
}

// Definición de la Clase hijo
// Extiende de Persona, esta realizando la herencia
class Empleado extends Persona {
    constructor (nombre, apellido, departamento) {
        // super nos ayuda a llamar el constructor de la clase padre y asignarle los parámetros necesarios.
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento () {
        return this._departamento;
    }

    set departamento (departamento) {
        this._departamento = departamento;
    }
}

/**
 * Uso de la clase Empleado
 * En este momento, cualquier instancia de la clase Empleado puede usar
 * los métodos get y set de la clase Persona
 */
const empleado = new Empleado("Gandy", "Ávila", "3");

console.log(empleado.nombre);
console.log(empleado.apellido);
console.log(empleado.departamento);
console.log(empleado.nombreCompleto());

empleado.nombre = "Esaú";
empleado.apellido = "Ávila";
empleado.departamento = "4";

console.log(empleado.nombre);
console.log(empleado.apellido);
console.log(empleado.departamento);
console.log(empleado.nombreCompleto());

console.log(empleado);
