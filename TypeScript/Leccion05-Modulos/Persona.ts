/*
 * Para poder usar esta clase en otro archivo, es necesario usar
 * la palabra reservada export.
 * */ 
export class Persona
{
    private _nombre: string;

    public constructor(nombre: string)
    {
        this._nombre = nombre;
    }

    get nombre (): string
    {
        return this._nombre;
    }

    set nombre (nombre: string)
    {
        this._nombre = nombre;
    }
}
