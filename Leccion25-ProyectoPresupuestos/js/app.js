const divPresupuesto = document.getElementById("presupuesto");
const divPorcentaje = document.getElementById("porcentaje");
const divIngresos = document.getElementById("ingresos");
const divEgresos = document.getElementById("egresos");
const divListaIngresos = document.getElementById("lista-ingresos");
const divListaEgresos = document.getElementById("lista-egresos");

const ingresos = [
    new Ingreso("Salario", 2100),
    new Ingreso("Venta de coche", 15000),
];

const egresos = [
    new Egreso("Renta de departamento", 3000),
    new Egreso("Ropa", 500),
];

const cargarApp = () => {
    cargarCabecero();
    cargarDatos(divListaEgresos, egresos, '-', true);
    cargarDatos(divListaIngresos, ingresos, '+');
};

const cargarCabecero = () => {
    const totalIngresos = calculaTotal(ingresos);
    const totalEgresos = calculaTotal(egresos);

    divPresupuesto.innerHTML = formatoMoneda(totalIngresos - totalEgresos);
    divPorcentaje.innerHTML = formatoPorcentaje(totalEgresos / totalIngresos);
    divIngresos.innerHTML = formatoMoneda(totalIngresos);
    divEgresos.innerHTML = formatoMoneda(totalEgresos);
};

const cargarDatos = (div, arregloValores, strPreValor = '', esEgreso = false) => {
    let totalEgresos = 0;
    let elementos = '';

    if (esEgreso) {
        totalEgresos = calculaTotal(egresos);
    }

    arregloValores.forEach((elemento) => {
        elementos += `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${elemento.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${strPreValor} ${formatoMoneda(elemento.valor)}</div>
                ${esEgreso ? '<div class="elemento_porcentaje">' + formatoPorcentaje(elemento.valor / totalEgresos) + '</div>' : ''}
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline" onclick="eliminarDato(${esEgreso}, ${elemento.id})"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
        `;
    });

    div.innerHTML = elementos;
};

const eliminarDato = (esEgreso, id) => {
    let referenciaArreglo, referenciaDiv, strPre;
    
    if (esEgreso) {
        referenciaArreglo = egresos;
        referenciaDiv = divListaEgresos;
        strPre = '-';
    } else {
        referenciaArreglo = ingresos;
        referenciaDiv = divListaIngresos;
        strPre = '+';
    }

    const indiceEliminar = referenciaArreglo.findIndex(elemento => elemento.id === id);

    referenciaArreglo.splice(indiceEliminar, 1);
    
    cargarCabecero();
    cargarDatos(referenciaDiv, referenciaArreglo, strPre, esEgreso);
};

const agregarDato = () => {
    const formulario = document.forms['formulario'];
    const descripcion = formulario['descripcion'];
    const valor = formulario['valor'];

    if (descripcion.value && valor.value) {
        const tipo = formulario['tipo'];
        
        // +valor.value convierte el string a un númerico
        if (tipo.value == '+') {
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarDatos(divListaIngresos, ingresos, tipo.value, false);
        } else {
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarDatos(divListaEgresos, egresos, tipo.value, true);
        }
    } else {
        console.error("Faltan datos por rellenar");
    }
};

const calculaTotal = (arregloValores) => {
    let total = 0;
    arregloValores.forEach((element) => {
        total += element.valor
    });
    return total;
};

const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2});
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US', {style: 'percent', minimumFractionDigits: 2});
}
