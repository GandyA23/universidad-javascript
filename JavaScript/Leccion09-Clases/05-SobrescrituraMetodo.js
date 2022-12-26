/**
 * Sobrescritura de un método
 * Es posible desde una clase hija modificar el comportamiento de un
 * método desde la clase padre. 
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
class Empleado extends Persona {
    constructor (nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento () {
        return this._departamento;
    }

    set departamento (departamento) {
        this._departamento = departamento;
    }

    // Se sobrescribe el método y cambia el comportamiento en 
    // todas las instancias de Empleado
    nombreCompleto () {
        return super.nombreCompleto() + ' ' + this._departamento;
    }
}

const persona = new Persona("Gandy", "Ávila");
const empleado = new Empleado("Esaú", "Estrada", "4");

console.log(persona.nombreCompleto());
console.log(empleado.nombreCompleto());
