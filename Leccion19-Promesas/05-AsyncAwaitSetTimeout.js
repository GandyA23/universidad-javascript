// Combinación de async/await, setTimeout y promesas
async function funcionCombinada () {
    // Realiza un proceso secuencial gracias a await
    console.log('Inicio de la función');
    let promesa = new Promise(resolve => {
        setTimeout(() => resolve('Promesa con await y timeout'), 3000)
    })
    console.log(await promesa);
    console.log('Fin de la función');
} 

funcionCombinada();
