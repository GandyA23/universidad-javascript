// Prueba de las clases
class Persona {
    
    static contadorPersonas = 0;

    constructor (nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    // Getters
    get idPersona () {
        return this._idPersona;
    }

    get nombre () {
        return this._nombre;
    }

    get apellido () {
        return this._apellido;
    }

    get edad () {
        return this._edad;
    }

    // Setters
    set nombre (nombre) {
        this._nombre = nombre;
    }

    set apellido (apellido) {
        this._apellido = apellido;
    }

    set edad (edad) {
        this._edad = edad;
    }

    toString () {
        return `Persona { 
            idPersona: ${this.idPersona}, 
            nombre: ${this.nombre}, 
            apellido: ${this.apellido}, 
            edad: ${this.edad}
        }`
    }
}

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

class Cliente extends Persona {

    static contadorClientes = 0;

    constructor (nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente () {
        return this._idCliente;
    }

    get fechaRegistro () {
        return this._fechaRegistro;
    }

    set fechaRegistro (fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }

    toString () {
        return `Cliente { 
            idCliente: ${this.idCliente}, 
            fechaRegistro: ${this.fechaRegistro}
        } extends ${super.toString()}`;
    }
}

const persona1 = new Persona("Gandy", "Avila", "21");
const persona2 = new Persona("Esaú", "Estrada", "22");
const empleado1 = new Empleado("Regina", "García", "21", 20000); 
const empleado2 = new Empleado("Violeta", "Millán", "20", 15000); 
const cliente1 = new Cliente("Diego", "Velazco", "21", new Date()); 
const cliente2 = new Cliente("Alexis", "Loya", "22", new Date()); 

console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(empleado2.toString());
console.log(cliente1.toString());
console.log(cliente2.toString());
