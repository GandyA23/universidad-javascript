// Uso de prototype
// prototype nos ayuda a agregar una nueva propiedad al método constructor, 
// esta después de haber sido declarada. 

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

// Agrega la propiedad telefono al método constructor
Persona.prototype.telefono = '111111111';

// Gracias a la palabra reservada new, podrá ser posible crear un nuevo objeto
// Ambas variables tiene diferente dirección de memoria
const padre = new Persona('Martin', 'Ávila', 'martin@gmail.com');
const madre = new Persona('Martha', 'Estrada', 'martha@gmail.com');

// Cambia el valor de la propiedad
padre.telefono = '2222222222';

// Impresión de la propiedad telefono
console.log(padre.telefono);
console.log(madre.telefono);
