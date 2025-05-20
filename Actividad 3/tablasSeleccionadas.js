
let tipo = prompt('¿Qué tablas deseas ver? Escribe "pares" o "impares":');
tipo = tipo.toLowerCase().trim();

if (tipo === "pares" || tipo === "impares") {
    let inicio = (tipo === "pares") ? 2 : 1;

    for (let num = inicio; num <= 10; num += 2) {
        console.log(`Tabla del ${num}:`);
        for (let i = 1; i <= 12; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }
        console.log("----------------------");
    }
} else {
    console.log("Entrada no válida. Debes escribir 'pares' o 'impares'.");
}
