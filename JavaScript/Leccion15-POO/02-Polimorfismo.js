/**
 * Polimorfismo = Múltiples formas
 */

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
    
    obtenerDetalles () {
        return `Gerente: departamento : ${this._departamento}, ${super.obtenerDetalles()}`;
    }
}

// Función polimórfica
function imprimirDetalles (tipo) {
    /**
     * Esta función estará recibiendo instancias de Gerente y Empleado, 
     * entonces podrá imprimir obtener detalles
     */
    console.log(tipo.obtenerDetalles());
}

const empleado1 = new Empleado("Esaú", 600);
const gerente1 = new Gerente("Gandy", 5000, "Sistemas");

imprimirDetalles(empleado1);
imprimirDetalles(gerente1);
