function doOperation (ope) {
    let resultado = "Ha ocurrido un error en la operación";

    // Consulta el valor actual de los inputs
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    if (!isNaN(n1) && !isNaN(n2)) {
        switch(ope) {
            case '+':
                resultado = n1 + n2;
                break;
            case '-':
                resultado = n1 - n2;
                break;
            case '*':
                resultado = n1 * n2;
                break;
            case '/':
                resultado = n1 / n2;
                break;
        }
    }

    document.getElementById("resultado").value = resultado
}
