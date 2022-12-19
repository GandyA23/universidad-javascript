class Persona {
    constructor (nombres, apellidos) {
        this._nombres = nombres;
        this._apellidos = apellidos;
    }

    get nombres() {
        return this._nombres;
    }

    get apellidos() {
        return this._apellidos;
    }

    set nombres(nombres) {
        this._nombres = nombres;
    }

    set apellidos(apellidos) {
        this._apellidos = apellidos;
    }
}
