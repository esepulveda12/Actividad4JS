//Emily Zharith Sepulveda Rayo 
// Diplomado en Desarrollo web 

// 1. Función que determina si un año es bisiesto
function esBisiesto(año) {
    año = parseInt(año); // Convertimos el año a entero
    return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}

// 2. Función que convierte grados Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    celsius = parseFloat(celsius); 
    return (celsius * 9/5) + 32;
}

// 3. Función que devuelve el mayor de dos números
function mayorDeDos(num1, num2) {
    num1 = parseFloat(num1); 
    num2 = parseFloat(num2); 
    return num1 > num2 ? num1 : num2;
}

// 4. Función que convierte minutos en horas y minutos
function convertirMinutos(minutos) {
    minutos = parseInt(minutos); 
    let horas = Math.floor(minutos / 60); 
    let minutosRestantes = minutos % 60; 
    return `${horas} horas y ${minutosRestantes} minutos`;
}

// 5. Función que determina si un número está dentro de un rango dado (incluyendo los límites)
function estaEnRango(numero, inicio, fin) {
    numero = parseFloat(numero); 
    inicio = parseFloat(inicio); 
    fin = parseFloat(fin); 
    return numero >= inicio && numero <= fin;
}

// 6. Función que calcula el precio final después de aplicar un porcentaje de descuento
function calcularPrecioFinal(precioInicial, descuento) {
    precioInicial = parseFloat(precioInicial); 
    descuento = parseFloat(descuento); 
    return precioInicial - (precioInicial * (descuento / 100));
}

// 7. Función que muestra el resultado de la función correspondiente
function mostrarResultado(funcion, ...args) {
    let resultado;
    switch(funcion) {
        case 'esBisiesto':
            resultado = esBisiesto(args[0]) ? 'Es un año bisiesto.' : 'No es un año bisiesto.';
            document.getElementById('resultado-esBisiesto').innerText = resultado;
            break;
        case 'celsiusAFahrenheit':
            resultado = celsiusAFahrenheit(args[0]);
            document.getElementById('resultado-celsiusAFahrenheit').innerText = `${resultado} °F`;
            break;
        case 'mayorDeDos':
            resultado = mayorDeDos(args[0], args[1]);
            document.getElementById('resultado-mayorDeDos').innerText = `El mayor es: ${resultado}`;
            break;
        case 'convertirMinutos':
            resultado = convertirMinutos(args[0]);
            document.getElementById('resultado-convertirMinutos').innerText = resultado;
            break;
        case 'estaEnRango':
            resultado = estaEnRango(args[0], args[1], args[2]) ? 'Está en el rango.' : 'No está en el rango.';
            document.getElementById('resultado-estaEnRango').innerText = resultado;
            break;
        case 'calcularPrecioFinal':
            resultado = calcularPrecioFinal(args[0], args[1]);
            document.getElementById('resultado-calcularPrecioFinal').innerText = `Precio final: $${resultado}`;
            break;
        default:
            document.getElementById('resultado-esBisiesto').innerText = 'Función no reconocida.';
    }
}
