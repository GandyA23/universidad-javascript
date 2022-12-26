let numero = 3;

let numeroTexto = "Valor desconocido";

// Ejemplo básico de switch
// Todas las comparaciones realizadas en el switch son de tipo estricto
// Tanto valor como el tipo de dato deben de coincidir
// Es posible evaluar valores númericos y de tipo string
switch (numero) {
    case 1:
        numeroTexto = "Número uno";
        break; // Necesario para evitar continuar con los siguientes casos
    
    case 2:
        numeroTexto = "Número dos"
        break;
   
    case 3:
        numeroTexto = "Número tres"
        break;
    
    default: 
        numeroTexto = "Caso no encontrado";
}

console.log(numeroTexto);
