const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Dibujar un cuadrado con una 'X'
 *
 * Entradas:
 *  * Tamaño del cuadrado
 *
 * Salida:
 *  
 *  * cuando la cantidad es (6)
 *    ******
 *    **  **
 *    * ** *
 *    * ** *
 *    **  **
 *    ******
 * 
 *  cuando la cantidad es (9)
 *   *********
 *   **     **
 *   * *   * *
 *   *  * *  *
 *   *   *   *
 *   *  * *  *
 *   * *   * *
 *   **     **
 *   *********
 */

rl.question("Ingrese el tamaño del cuadrado: ", (n) => {
  n = parseInt(n); // Aseguramos que n sea un número entero

  for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j < n; j++) {
      // Las esquinas y los bordes del cuadrado son '*'
      if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
        row += "*";
      }
      // La diagonal principal de la 'X' es '*'
      else if (i === j) {
        row += "*";
      }
      // La diagonal secundaria de la 'X' es '*'
      else if (i + j === n - 1) {
        row += "*";
      } else {
        row += " "; // Espacios en el centro
      }
    }

    console.log(row);
  }
});



