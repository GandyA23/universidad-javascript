// Declaración de variables
let saludo : string = "Hola mundo desde TypeScript";
let numero : number = 10;

let cualquiera : any = "String";
cualquiera = 10;

// Declaración de constantes
const PI_NUMBER = 3.1416;

function saludar() 
{
    console.log("Saludar con actualización");
    console.log(saludo, numero, cualquiera);
}

saludar();