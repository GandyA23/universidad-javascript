/**
 * Static
 * Las propiedades y métodos que se declaren static, serán asociados directamente con la clase y no con la instancia del objeto.
*/

class Persona {

    // Atributos estáticos
    static contador = 0;

    constructor (nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;

        // Las variables estáticas no deben de acceder con this dentro del objeto, sino con la clase
        Persona.contador++;
        console.log(`Se incrementa el contador: ${Persona.contador}`);
    }

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
    static saludar () {
        console.log("Hola programador, soy un método estático");
    }

    static saludarConPersona (person) {
        console.log(`Hola ${person.nombre} ${person.apellido}, soy un método estático`);
    }
}

// No es posible usarlo desde una instancia de la clase
const persona1 = new Persona("Gandy", "Ávila");
const persona2 = new Persona("Esaú", "Estrada");

// Lanza el valor undefined 
console.log(persona1.contador);
console.log(persona2.contador);

// Usar variables estáticas
console.log(Persona.contador);
