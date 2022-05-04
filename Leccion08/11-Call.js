// Método Call
// El método call nos va a permitir llamar el método de un objeto, dentro de otro objeto. 

// Objeto 1
const persona1 = {
    nombre: 'Gandy Esaú',
    apellido: 'Ávila Estrada',
    nombreCompleto: function(titulo = '', tel = '') {
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

// Objeto 2
const persona2 = {
    nombre: 'Denisse Regina',
    apellido: 'García Rivera'
}

// uso de call para usar el método nombreCompleto
// Es posible usarlo debido a que tenemos una estructura similar
console.log(persona1.nombreCompleto.call(persona2));

// Mandando parámetros
console.log(persona1.nombreCompleto.call(persona2, 'Ing.', '1111111111'));
