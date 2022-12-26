/**
 * instanceof
 * 
 * Esta palabra reservada nos regresará un valor booleano y nos ayudará a 
 * saber si una variable tiene una instancia específica de una clase. 
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

function determinarTipo (tipo) {
    console.log(tipo.obtenerDetalles());

    // uso de instanceof
    // instanceof puede detectar también si la instancia viene de los padres, pero no de los hijos, 
    // por eso si tienes varias preguntas anidadas con instanceof, es mejor empezar por los hijos.
    if (tipo instanceof Gerente)
        console.log("Es una instancia de Gerente");
    if (tipo instanceof Empleado)
        console.log("Es una instancia de Empleado");
    if (tipo instanceof Object)
        console.log("Es una instancia de Object");
}

const empleado1 = new Empleado("Esaú", 600);
const gerente1 = new Gerente("Gandy", 5000, "Sistemas");

determinarTipo(empleado1);
determinarTipo(gerente1);
