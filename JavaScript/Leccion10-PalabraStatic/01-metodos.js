/**
 * Static
 * Las propiedades y métodos que se declaren static, serán asociados directamente con la clase y no con la instancia del objeto.
*/

class Persona {
    constructor (nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    // Métodos no estáticos
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

    // Métodos estáticos
    // Definición de un método estático
    static saludar () {
        console.log("Hola programador, soy un método estático");
    }

    // Es posible usar static para crear constantes estáticas
    static get MAX_OBJ () {
        return 5;
    }

    static saludarConPersona (person) {
        console.log(`Hola ${person.nombre} ${person.apellido}, soy un método estático`);
    }
}

// No es posible usarlo desde una instancia de la clase
const persona = new Persona("Gandy", "Ávila");

// Genera un error
// console.log(persona.saludar());
// console.log(persona.saludar(persona));

// Llamado de métodos estáticos
Persona.saludar();
Persona.saludarConPersona(persona);
console.log(Persona.MAX_OBJ);
