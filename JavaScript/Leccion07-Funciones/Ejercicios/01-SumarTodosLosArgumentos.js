// Suma todos los valores que se encuentren en el array arguments

// Mi solución
function sumarTodo1() {
    let answ = 0;
    for(const i of arguments)
        answ += i;
    return answ;
}

// Solución de Ubaldo
function sumarTodo2() {
    let suma = 0;
    for(let i=0; i<arguments.length; i++) {
        suma += arguments[i];
    }
    return suma; 
}

console.log(sumarTodo1(1, 2, 3, 4, 5));
console.log(sumarTodo1(5, 4, 13, 10, 9));

console.log(sumarTodo2(1, 2, 3, 4, 5));
console.log(sumarTodo2(5, 4, 13, 10, 9));
