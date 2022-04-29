// Este valor ya no puede convertirse en un número
let num = "18x";

// Al momento de convertirlo, regresará el valor NaN 
// NaN = Not a Number
let edad = Number(num);

// La función isNaN nos dice si un valor es NaN
if (isNaN(edad))
    console.log("No es un número");
else
    console.log(edad >= ADULTO ? "PUEDE VOTAR!" : "NO PUEDE VOTAR");
