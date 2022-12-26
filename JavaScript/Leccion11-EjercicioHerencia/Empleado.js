// Clase hijo
class Empleado extends Persona {
    
    static contadorEmpleados = 0;
    
    constructor (nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado () {
        return this._idEmpleado;
    }
    
    get sueldo () {
        return this._sueldo;
    }

    set sueldo (sueldo) {
        this._sueldo = sueldo;
    }

    toString () {
        return `Empleado { 
            idEmpleado: ${this.idEmpleado}, 
            sueldo: ${this.sueldo}
        } extends ${super.toString()}`;
    }
}
