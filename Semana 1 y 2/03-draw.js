const { randomInt } = require("crypto");
const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Dibujar un cuadrado relleno en consola.
 *
 * Entradas:
 *  * Tamaño del lado del cuadrado
 *
 * Salida:
 *    * cuando el lado es (4)
 *        ****
 *        ****
 *        ****
 *        ****
 *
 *    * cuando el lado es (5)
 *        *****
 *        *****
 *        *****
 *        *****
 *        *****
 *
 */

rl.question("Ingrese el tamaño del cuadrado: ", (numero)=>{

    let sq = "";
    for (let i = 0; i<numero;i++) {
      sq += "*";
    }
    for (let i =0;i<numero;i++){
        console.log(sq)
    }



/**
 * Dibujar un triangulo relleno
 *
 * Entradas:
 *  * Tamaño del lado del triangulo
 *
 * Salida:
 *    * cuando el lado es (5)
 *        *****
 *        ****
 *        ***
 *        **
 *        *
 *
 *    * cuando el lado es (4)
 *        ****
 *        ***
 *        **
 *        *
 *
 */


rl.question("Ingrese el tamaño del triangulo: ", (t)=>{
  
  for (let i=t; i>0;i--){
    let tr="";
    for (let j=0;j<i;j++){
      tr+="*"
    }
    console.log(tr)
  }


/**
 * Dibujar un cuadrado sin relleno
 *
 * Entradas:
 *  * Tamaño del lado del cuadrado
 *
 * Salida:
 *    * cuando el lado es (5)
 *        *****
 *        *   *
 *        *   *
 *        *   *
 *        *****
 *
 *    * cuando el lado es (4)
 *        ****
 *        *  *
 *        *  *
 *        ****
 *
 */
rl.question("Ingrese el tamaño del cuadrado: ", (numero)=>{

  //Primera Fila
  let sq = "";
  for (let i = 0; i<numero;i++) {
    sq += "*";
  }
  console.log(sq)

  //Filas Intermedias
  for (let i=0; i<numero-2;i++){
    let col ="*"
    for (let j=0; j<numero-2;j++){
      col+=" "
    }
    col+="*"
    console.log(col)
  }
  
  //Ultima Fila
  console.log(sq)
  rl.close()

/**
 * Dibujar un triangulo sin relleno
 *
 * Entradas:
 *  * Tamaño del lado del triangulo
 *
 * Salida:
 *    * cuando el lado es (5)
 *        *****
 *        *  *
 *        * *
 *        **
 *        *
 *
 *    * cuando el lado es (4)
 *        ****
 *        * *
 *        **
 *        *
 *
 */

rl.question("Ingrese el tamaño del lado del ▲: ", (n)=>{
  let tr = "";
  for (let i = 0; i<n;i++) {
    tr += "*";
  }
  console.log(tr)
  for (let j=1; j<n-1;j++){
    let col ="*"
    for (let k=0; k<n-j-2;k++){
      col+=" "
    }
    col+="*"
  console.log(col)
  }
  console.log("*")
  rl.close()
})
})
})
})


/**
 *  * Dibujar una 'X'
 *
 * Entradas:
 *  * Cantidad de '*' por diagonal
 *
 * Salida:
 *  
 *  * cuando la cantidad es (6)
 *    *    *  
 *     *  *
 *      **
 *      **
 *     *  *
 *    *    *
 * 
 *  cuando la cantidad es (4)
 *    *  *
 *     **
 *     **
 *    *  *
 */

rl.question("Ingrese el tamaño de la X: ", (n)=>{
  
})
/**
 *  * Dibujar un cuadrado con una 'X'
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

