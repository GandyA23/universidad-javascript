/**
 * Palabra reservada await
 * Esta palabra reservada tiene como objetivo esperar el resultado de una función asíncrona, esto hace que tenga un comportamiento más secuencial.
 * await solo es posible usarla dentro de una función que tiene la palabra reservada async.
 */

// async/await
async function fnConPromesaYAwait () {
    let promesa = new Promise(resolve => {
        resolve('promesa con await');
    });

    // En vez de usar then, es posible usar await
    console.log(await promesa);
}

fnConPromesaYAwait();
