// import { parseCommunes } from "../parser.js";

// export class Controller {
//   getAllCommunes(req, res) {
//     const allCommunes = [
//       {
//         id: "numero de comuna",
//         name: "nombre comuna",
//         province: "provincia comuna",
//         address: "Dirección",
//         mayor: "Alcalde comuna",
//         surface: "Superficie comuna",
//         population: "Población comunal",
//       },
//     ];

//     return res.json(allCommunes);
//   }
// }

import { parseCommunes } from '../parser.js';

export async function getCommunes() {
  try {
    const communes = parseCommunes();

    return {
      success: true,
      data: communes,
      count: communes.length,
      message: `Se encontraron ${communes.length} comunas`
    };
  } catch (error) {
    console.error("Error en getCommunes:", error);
    return {
      success: false,
      data: [],
      count: 0,
      message: "Error al obtener comunas"
    };
  }
}

// commune/controller.js
// export class Controller {
//   static getAllCommunes(req, res) {
//     try {
//       const allCommunes = [
//         {
//           id: "1",
//           name: "Nombre Comuna",
//           province: "Provincia Comuna",
//           address: "Dirección",
//           mayor: "Alcalde Comuna",
//           surface: "Superficie Comuna",
//           population: "Población Comunal"
//         }
//       ];
//       res.json(allCommunes);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   }
// }