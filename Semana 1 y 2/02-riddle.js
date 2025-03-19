const { randomInt } = require("crypto");
const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/*
 * Descubrir el número aleatorio
 *
 * Entradas: cualquier elemento.
 *  * El usuario tiene dos intentos.
 * Salida:
 *  * Si adivino el número se envía un mensaje de exito
 *  * Si se ingresa algun elemento no numerico se considera fallido el intento
 *
 * Ayudas:
 *  Para generar un número entero aleatorio existe randomInt(min, max) donde 'min' esta incluído y max no está incluído
 *
 */


console.log(`Bienvenido. Adivine el número. Está entre 1 y 10\n\n`);

ni=randomInt(1,11);
console.log(ni)

rl.question("Ingrese el primer Numero: ", (n1)=>{
  if (ni==n1){
    console.log("Correcto!")
    rl.close();
  }else{
    console.log("Es incorrecto!")
    rl.question("Ingrese el segundo numero: ", (n2)=>{
      if (ni==n2){
        console.log("Correcto!")
        rl.close();
      }else{
        console.log("Haz fallado en los 2 intentos")
        rl.close();
      }
    })
  }
}
)
