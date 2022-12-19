const listaPersonas = document.getElementById("personas");

const personas = [
    new Persona("Gandy Esaú", "Ávila Estrada"),
];

function mostrarPersonas() {
    let txt = "";

    for (let persona of personas) {
        txt += `<li>${persona.nombres} ${persona.apellidos}</li>`;
    }

    listaPersonas.innerHTML = txt;
}

function agregarPersona() {
    // Otra manera de obtener un formulario
    const formulario = document.forms["formulario"];

    // Obtene el objeto de input dentro del formulario
    const nombres = formulario["nombres"];
    const apellidos = formulario["apellidos"];

    if (nombres.value && apellidos.value) {
        personas.push(new Persona(nombres.value, apellidos.value));
        mostrarPersonas();
    } else {
        console.log("No hay información que agregar");
    }
}
