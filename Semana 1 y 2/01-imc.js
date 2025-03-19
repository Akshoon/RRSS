const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
 * Calcular IMC:
 *
 * Instrucciones:
 * Entradas: Altura en centimetros, peso
 * Salida: IMC
 *
 * Ayudas:
 *
 * Para transformar de string a number existe
 *      'parseInt( variableATransformar )' o
 *      'parseFloat( variableATransformar )'
 *
 *
 */

console.log(`Bienvenido a la calculadora de IMC\n\n`);

rl.question("Ingrese su altura en centimetros: ", (height) => {
  rl.question("Ingrese su peso: ", (weight) => {
    let imc;
    height = parseFloat(height);
    weight = parseFloat(weight);
    imc = weight / ((height / 100) ** 2);
    console.log(`Su IMC es: ${imc.toFixed(2)}\n`);
    rl.close();
  });
});
