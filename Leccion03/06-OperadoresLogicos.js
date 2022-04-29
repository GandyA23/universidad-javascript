// AND (&&)
// Para que el resultado final sea verdadero, entonces ambos resultados deben de ser verdadero. 
// Ejemplo, verificar si a esta dentro de un rango entre otros dos valores.
const VAL_MIN = 0, VAL_MAX = 10;
let a = 5, b = 15;

// Dentro de rango
// Cambia a por b para el fuera de rango
if (a >= VAL_MIN && a <= VAL_MAX)
    console.log("Dentro de rango");
else
    console.log("Fuera de rango");

// OR (||) 
// Para que el resultado final sea verdadero, entonces uno de los dos resultados debe de ser verdadero, sí ambos son falsos, entonces el resultado final será falso.
// Ejemplo: Un papá solo podrá asistir al partido de su hijo sí esta de vacaciones o es un día de descanso
let vacaciones1 = false, diaDescanso1 = true;
let vacaciones2 = false, diaDescanso2 = false;

// Puede ir
// Cambia los 1 por 2 para ver el resultado de no puede ir
if (vacaciones1 || diaDescanso1)
    console.log("Es posible ir al partido del hijo");
else 
    console.log("No puedes ir al partido");
