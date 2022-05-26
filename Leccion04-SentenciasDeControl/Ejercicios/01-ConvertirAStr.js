// Convertir número a string
// Solo se aceptan 4 opciones, 1, 2, 3, 4

let num1 = 1, num2 = "1", num3 = -1;

// Cambia el valor de process para probar los diferentes casos
let process = num1;

// Estricto para solo aceptar númericos
if (process === 1 || process === 2 || process === 3 || process === 4) {
    process = String(process);    
    console.log("El número convertido a String:", process);
} else {
    console.log("La opción es invalida");
}
