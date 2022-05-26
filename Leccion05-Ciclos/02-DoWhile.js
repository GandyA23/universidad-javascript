// Todos los ciclos ejecutan su bloque de código siempre y cuando las condición sea verdadera

// do-while hacer-mientras
// Su característica principal es que mínimo el bloque de código se va a repetir una vez

let contador = 0;

// Mientras el contador sea menor que 3
// 0, 1, 2
do {
    console.log(contador);
} while (contador++ < 3);

contador = 0;

// 1, 2, 3
do {
    console.log(++contador);
} while (contador < 3);
