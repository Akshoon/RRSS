// import { Router } from "express";
// import { Controller } from "./controller.js";

// export class CommuneRoute {
//   static get route() {
//     const router = Router();
//     const controller = new Controller();
//     router.get("", controller.getAllCommunes);

//     return router;
//   }
// }

import express from 'express';
import { getCommunes } from './controller.js';

const router = express.Router();

router.get('/commune', async (req, res) => {
  try {
    const result = await getCommunes();
    res.json(result);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error interno del servidor"
    });
  }
});

export const CommuneRoute = router; // ✅ Exporta el router


// commune/route.js
// import { Router } from "express";
// import { Controller } from "./controller.js";

// export class CommuneRoute {
//   static get route() {
//     const router = Router();
//     const controller = new Controller();
//     router.get("", controller.getAllCommunes);

//     return router;
//   }
// }
