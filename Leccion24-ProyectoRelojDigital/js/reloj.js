const mostrarReloj = () => {
    let fecha = new Date();

    document.getElementById('hora').innerHTML = `${formatoHora(fecha.getHours())}:${formatoHora(fecha.getMinutes())}:${formatoHora(fecha.getSeconds())}`;
    
    document.getElementById('fecha').innerHTML = `${fecha.toDateString()}`;
};

const formatoHora = (value) => {
    return value < 10 ? `0${value}` : value;
};

// Llama la función cada segundo
setInterval(mostrarReloj, 1000);
