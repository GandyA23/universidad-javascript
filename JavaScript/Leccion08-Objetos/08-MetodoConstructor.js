// Constructores y métodos de constructor

// Función constructor de objetos con valores default
// Nota: No es la mejor práctica
function Persona(nombre = 'Gandy', apellido = 'Ávila', email = 'gandy@gmail.com') {
    // Propiedades
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    // Métodos
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}

// Gracias a la palabra reservada new, podrá ser posible crear un nuevo objeto
// Ambas variables tiene diferente dirección de memoria
const padre = new Persona('Martin', 'Ávila', 'martin@gmail.com');
const madre = new Persona('Martha', 'Estrada', 'martha@gmail.com');

// Impresión de los objetos
console.log(padre);
console.log(madre);

// Cambios de valores 
padre.nombre = 'Martín';

// Los cambios solo se van a ver reflejados en su respectivo objeto
// Debido a que tienen diferentes direcciones de memoria
console.log(padre);
console.log(madre);

// Hacer uso de los métodos dentro de un objeto
// Es necesario hacer uso del parentesís
console.log(padre.nombreCompleto());
console.log(madre.nombreCompleto());
