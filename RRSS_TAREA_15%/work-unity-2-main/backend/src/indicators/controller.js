import { parseCommunes } from "../parser.js"; // Importamos la función de parser

export class Controller {
  // Obtiene todos los indicadores
  getAllIndicators(req, res) {
    const allIndicators = [
      { id: "1", name: "Población Comunal Femenina" },
      { id: "2", name: "Población Comunal Masculina" },
      { id: "3", name: "Ingresos por Fondo Común Municipal" },
      { id: "4", name: "Ingresos Propios" },
      { id: "5", name: "Consumo de Agua" },
      { id: "6", name: "Gastos Salud" },
      { id: "7", name: "Ingresos Salud" },
    ];

    return res.json(allIndicators);
  }

  // Obtiene un indicador específico por su ID
  async getIndicatorById(req, res) {
    const { id } = req.params;
    
    // Llamamos a la función de parser para obtener los datos de las comunas
    const communes = parseCommunes();

    // Buscamos el indicador solicitado
    let indicatorData = [];

    switch (id) {
      case "1":
        indicatorData = communes.map(commune => ({
          idCommune: commune.id,
          commune: commune.name,
          value: commune.femalePopulation,  // Devuelve el porcentaje femenino
        }));
        break;
      case "2":
        indicatorData = communes.map(commune => ({
          idCommune: commune.id,
          commune: commune.name,
          value: commune.malePopulation,  // Devuelve el porcentaje masculino
        }));
        break;
      case "3":
        indicatorData = communes.map(commune => ({
          idCommune: commune.id,
          commune: commune.name,
          value: commune.municipalFund,  // Devuelve los ingresos por Fondo Común Municipal
        }));
        break;
      case "4":
        indicatorData = communes.map(commune => ({
          idCommune: commune.id,
          commune: commune.name,
          value: commune.ownIncome,  // Devuelve los ingresos propios
        }));
        break;
      case "5":
        indicatorData = communes.map(commune => ({
          idCommune: commune.id,
          commune: commune.name,
          value: commune.waterConsumption,  // Devuelve el consumo de agua
        }));
        break;
      case "6":
        indicatorData = communes.map(commune => ({
          idCommune: commune.id,
          commune: commune.name,
          value: commune.healthExpenditure,  // Devuelve los gastos en salud
        }));
        break;
      case "7":
        indicatorData = communes.map(commune => ({
          idCommune: commune.id,
          commune: commune.name,
          value: commune.healthIncome,  // Devuelve los ingresos en salud
        }));
        break;
      default:
        return res.status(400).json({ error: "Indicador no encontrado" });
    }

    return res.json(indicatorData);  // Devuelve los datos filtrados
  }
}

/**
 * Indicadores:
 *
 *  % Población comunal femenina
 *  % Población comunal Masculina
 *  Ingresos por Fondo Común Municipal
 *  Ingresos Propios
 *  Consumo de Agua
 *  Gastos Salud
 *  Ingresos Salud
 */
