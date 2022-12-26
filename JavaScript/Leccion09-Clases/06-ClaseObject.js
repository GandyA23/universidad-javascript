/**
 * Clase Object
 * Es la clase padre de todos los objetos
 */

// Si a una clase definida no se le agrega ningún extends, 
// de manera interna le hará un extends a Object. 
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

    nombreCompleto () {
        return this._nombre + ' ' + this._apellido;
    }

    // Sobrescritura de métodos de Object
    toString () {
        return this.nombreCompleto();
    }
}

const persona = new Persona("Gandy", "Ávila");

// Es posible usar métodos heredados de Objecto y también sobrescribirlos
console.log(persona.toString());
