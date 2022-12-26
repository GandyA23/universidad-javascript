interface Usuario
{
    nombre: string;
    password: string;

    // Atributo opcional
    confirmarPassword?: string;
}

interface Abordar
{
    abordar(): void
}

// No es necesario declarar confirmarPassword, debido a que es opcional
let usuario1: Usuario = 
{
    nombre: "GandyA23", 
    password: "SuperSecretPassword123"
}

let usuario2: Usuario = 
{
    nombre: "EsauE06",
    password: "SuperSecretPassword123",
    confirmarPassword: "SuperSecretPassword123"
}

console.log(usuario1, usuario2);
console.log(usuario1.nombre, usuario2.nombre);

let avion: Abordar = 
{
    abordar: () => {
        console.log("abordando transporte");   
    }
}

avion.abordar();
