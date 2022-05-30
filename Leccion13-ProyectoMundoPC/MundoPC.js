class DispositivoEntrada {

    constructor (tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada () {
        return this._tipoEntrada;
    }

    get marca () {
        return this._marca;
    }

    set tipoEntrada (tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    } 

    set marca (marca) {
        this._marca = marca;
    }

    toString () {
        return `DispositivoEntrada { 
            tipoEntrada: ${this.tipoEntrada}, 
            marca: ${this.marca}
        }`;
    }
}

class Raton extends DispositivoEntrada {

    static contadorRatones = 0;

    constructor (tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton () {
        return this._idRaton;
    }

    toString () {
        return `Raton { 
            idRaton: ${this.idRaton}
        } extends ${super.toString()}`;
    }
}

class Teclado extends DispositivoEntrada {

    static contadorTeclados = 0;

    constructor (tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado () {
        return this._idTeclado;
    }

    toString () {
        return `Teclado { 
            idTeclado: ${this.idTeclado}
        } extends ${super.toString()}`;
    }
}

class Monitor {

    static contadorMonitores = 0;

    constructor (marca, tamano) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }

    get idMonitor () {
        return this._idMonitor;
    }

    get marca () {
        return this._marca;
    }

    get tamano () {
        return this._tamano;
    }

    set marca (marca) {
        this._marca = marca;
    }

    set tamano (tamano) {
        this._tamano = tamano;
    }

    toString () {
        return `Monitor { 
            idMonitor: ${this.idMonitor},
            marca: ${this.marca}, 
            tamano: ${this.tamano}
        }`;
    }
}

class Computadora {

    static contadorComputadoras = 0;

    constructor (nombre, monitor, teclado, raton) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre; 
        this._monitor = monitor; 
        this._teclado = teclado; 
        this._raton = raton;    
    }

    get idComputadora () {
        return this._idComputadora;
    }

    get nombre () {
        return this._nombre;
    }

    get monitor () {
        return this._monitor;
    }

    get teclado () {
        return this._teclado;
    }

    get raton () {
        return this._raton;
    }

    set nombre (nombre) {
        this._nombre = nombre;
    }

    set monitor (monitor) {
        this._monitor = monitor;
    }

    set teclado (teclado) {
        this._teclado = teclado;
    }

    set raton (raton) {
        this._raton = raton;
    }
   
    toString () {
        return `Computadora { 
            idComputadora: ${this.idComputadora},
            nombre: ${this.nombre},
            monitor: ${this.monitor},
            teclado: ${this.teclado},
            raton: ${this.raton}
        }`;
    }
}

class Orden {

    static contadorOrdenes = 0;

    constructor () {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden () {
        return this._idOrden;
    }

    get computadoras () {
        return this._computadoras;
    }

    agregarComputadora (computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden () {
        return this.toString();
    }

    toString () {
        let str = ``;

        for (const c of this._computadoras)
            str += `${c}, \n`;

        return `Orden {
            idOrden: ${this.idOrden},
            computadoras: [
                ${str}
            ]
        }`;
    }
}

// Creación de objetos para pruebas
const raton1 = new Raton("USB", "HP");
const raton2 = new Raton("Bluetooth", "Dell");
const teclado1 = new Teclado("Bluetooth", "MSI");
const teclado2 = new Teclado("USB", "Acer");
const monitor1 = new Monitor("HP", 15);
const monitor2 = new Monitor("Dell", 27);
const computadora1 = new Computadora("HP", monitor1, teclado1, raton1);
const computadora2 = new Computadora("Armada", monitor2, teclado2, raton2);
const order1 = new Orden();

order1.agregarComputadora(computadora1);
order1.agregarComputadora(computadora2);

console.log(raton1.toString());
console.log(raton2.toString());
console.log(teclado1.toString());
console.log(teclado2.toString());
console.log(monitor1.toString());
console.log(monitor2.toString());
console.log(computadora1.toString());
console.log(computadora2.toString());
console.log(order1.mostrarOrden());
