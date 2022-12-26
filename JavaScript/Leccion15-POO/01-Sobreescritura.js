class Empleado {
    constructor (nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles () {
        return `Empleado: nombre : ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor (nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    // Sobreescritura de la función que se encuentra en el padre
    // Para que la sobreescritura funcione, debe de tener el mismo nombre
    obtenerDetalles () {
        return `Gerente: departamento : ${this._departamento}, ${super.obtenerDetalles()}`;
    }
}

const empleado1 = new Empleado("Esaú", 600);
const gerente1 = new Gerente("Gandy", 5000, "Sistemas");

// Ambos tienen comportamientos distintos
console.log(empleado1.obtenerDetalles());
console.log(gerente1.obtenerDetalles());
