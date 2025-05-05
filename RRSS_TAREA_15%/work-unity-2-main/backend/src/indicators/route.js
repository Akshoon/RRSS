import { Router } from "express";
import { Controller } from "./controller.js";

export class IndicatorRoute {
  // Este es un método estático que devuelve la ruta
  static route() {
    const router = Router();
    const controller = new Controller();

    router.get("/", controller.getAllIndicators);
    router.get("/:id", controller.getIndicatorById);

    return router;
  }
}

