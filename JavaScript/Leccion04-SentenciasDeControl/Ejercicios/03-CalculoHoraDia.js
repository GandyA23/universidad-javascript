// Dependiendo la hora del día, envia un mensaje
/*
6AM - 11AM      - Buenos días
12PM - 18PM     - Buenas tardes
19PM - 24PM     - Buenas noches
0AM - 05AM      - Durmiendo   
*/

let hora = 24;
let mensaje;

if (hora >= 0 && hora < 6)
    mensaje = "Durmiendo";
else if (hora >= 6 && hora < 12)
    mensaje = "Buenos días";
else if (hora >= 12 && hora < 19)
    mensaje = "Buenas tardes";
else if (hora >= 19 && hora <= 24)
    mensaje = "Buenas noches";
else 
    mensaje = "Hora invalida";

console.log(mensaje);
