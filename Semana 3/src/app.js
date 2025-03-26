import {getData} from "./poke.js"
import QRCode from "qrcode"

// (async function main() {
//     //const data = await getData('https://pokeapi.co/api/v2/pokemon/ditto');
//     //console.log(data);

//     QRCode.toFile("qrcode.png", "https://admision.uahurtado.cl/team/wilson-alavia/")
//     try {
//         const json = '{ "nombre": "Pikachu"} ';
//         // Error
//         const data = JSON.parse(json);
//         console.log(data.nombre);
//       } catch (err) {
//         console.log('Ocurrió un error al parsear JSON:', err.message);
//       }
// })()

(async function main() {
  const data=await getData("https://pokeapi.co/api/v2/pokemon-species");
  const data2=await getData (data.next);

  const completedResult= [...data.results,...data2.results]

  console.log(completedResult)
}) 