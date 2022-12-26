class Producto {
    
    static contadorProductos = 0;

    constructor (nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto () {
        return this._idProducto;
    }

    get nombre () {
        return this._nombre;
    }

    get precio () {
        return this._precio;
    }

    set nombre (nombre) {
        this._nombre = nombre;
    }
    
    set precio (precio) {
        this._precio = precio;
    }

    toString () {
        return `Producto { 
            idProducto: ${this.idProducto}, 
            nombre: ${this.nombre},
            precio: ${this.precio}
        }`;
    }
}

class Orden {

    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS () {
        return 5;   
    }

    constructor (productos) {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden () {
        return this._idOrden;
    }

    get productos () {
        return this._productos;
    }

    get contadorProductosAgregados () {
        return this._contadorProductosAgregados;
    }

    set productos (productos) {
        this._productos = productos;
    }

    agregarProducto (producto) {
        if (this._productos.length >= Orden.MAX_PRODUCTOS) 
            return;

        this._productos.push(producto);
        this._contadorProductosAgregados++;
    }

    calcularTotal () {
        let total = 0;
        for (const p of this.productos)
            total += p.precio;
        return total;
    }

    mostrarOrden () {
        let str = this.toString();
        str += `\nTotal: $${this.calcularTotal()}`;
        return str;
    }

    toString () {
        let str = `Orden { 
            idOrden: ${this.idOrden}, 
            productos: [
            `;
        
        for (const p of this.productos) 
            str += `${p.toString()}, `;
        str += `]
            }`;
        return str;
    }
}

// Creación de objetos para pruebas 
const producto1 = new Producto("Pantalon", 200);
const producto2 = new Producto("Camisa", 100);

const orden1 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

console.log(producto1.toString());
console.log(producto2.toString());
console.log(orden1.mostrarOrden());
console.log(orden1.toString());
