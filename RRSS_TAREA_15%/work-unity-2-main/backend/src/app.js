// import express from "express";
// import cors from "cors";
// import { CommuneRoute } from "./commune/route.js";
// import { IndicatorRoute } from "./indicators/route.js";


// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use("/commune/", CommuneRoute.route);
// app.use("/indicator/", IndicatorRoute.route);

// const PORT = 3000;
// app.listen(PORT, () => console.log(`Server is on in http://localhost:${PORT}`));

import express from 'express';
import cors from 'cors';
import { CommuneRoute } from './commune/route.js'; // Asegúrate de que esta ruta esté bien
import { IndicatorRoute } from './indicators/route.js'; // Asegúrate de importar correctamente

const app = express();
const PORT = 3000;

// Usamos el método estático `route()` para obtener la ruta de `IndicatorRoute`
const indicatorRoute = IndicatorRoute.route(); // Llamamos al método estático route()

app.use(cors()); // Recomendado para frontend-backend separados
app.use(express.json());

// 👇 Aquí se monta el prefijo /api/commune para las comunas
app.use('/api', CommuneRoute);

// 👇 Aquí se monta el prefijo /api/indicators para los indicadores
app.use('/api/indicator', indicatorRoute); // Usamos el router de indicadores correctamente

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
