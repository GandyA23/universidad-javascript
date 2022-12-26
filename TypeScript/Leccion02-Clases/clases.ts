class Persona 
{
    // Private field
    #nombre: string = "Gandy";

    public constructor(nombre: string)
    {
        this.#nombre = nombre;
    }

    public get nombre (): string
    {
        return this.#nombre;
    }

    public set nombre (nombre: string)
    {
        this.#nombre = nombre;
    }

    // static method
    static metodoStatico() 
    {
        return 10;
    }
}

const persona = new Persona("Gandy");

// Genera un error, debido a que no se puede acceder directamente
// console.log(persona.#nombre);

console.log(persona.nombre);
console.log(Persona.metodoStatico());
