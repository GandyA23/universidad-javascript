// Dado un mes del año, dime en que estación se encuentra
// Con la estructura switch

let mes = 9;
let estacion;

switch (mes) {
    // Considerando varios casos para un mismo bloque de código
    case 12:
    case 1:
    case 2:
        estacion = "Invierno";
        break;

    case 3:
    case 4:
    case 5:
        estacion = "Primavera";
        break;

    case 6:
    case 7:
    case 8:
        estacion = "Verano";
        break;

    case 9:
    case 10:
    case 11:
        estacion = "Otoño";
        break;

    default:
        estacion = "Caso invalido";
}

console.log(estacion);
