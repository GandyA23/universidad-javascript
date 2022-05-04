// Método apply
// El método apply es parecido al call, la principal diferencia es al momento de pasar argumentos.

// Objeto 1
const persona1 = {
    nombre: 'Gandy Esaú',
    apellido: 'Ávila Estrada',
    nombreCompleto: function(titulo, tel) {
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}

// Objeto 2
const persona2 = {
    nombre: 'Denisse Regina',
    apellido: 'García Rivera'
}

// uso de apply
console.log(persona1.nombreCompleto.apply(persona2));

// Para poder mandar los argumentos, es necesario mandarlos en un arreglo
console.log(persona1.nombreCompleto.apply(persona2, ['Ing.', '1111111111']));
