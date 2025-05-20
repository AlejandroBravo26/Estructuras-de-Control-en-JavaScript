
let numero = prompt("Ingresa un número para ver su tabla de multiplicar:");
numero = Number(numero);

if (isNaN(numero)) {
    console.log("Por favor, ingresa un número válido.");
} else {
    console.log("Tabla de multiplicar del " + numero + ":");
    for (let i = 1; i <= 12; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}
