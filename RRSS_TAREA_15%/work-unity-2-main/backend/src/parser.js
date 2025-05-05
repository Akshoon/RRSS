// import fs from "fs";
// import path from "path";
// import * as cheerio from "cheerio";
// import { fileURLToPath } from 'url';

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// export function parseCommunes() {
//     const htmlDir = path.join(__dirname, '../../../web-scraping-main/example');  // Ajusta la ruta si es necesario

//     console.log("Buscando archivos en:", htmlDir);

//     try {
//         if (!fs.existsSync(htmlDir)) {
//             console.error("ERROR: El directorio no existe.");
//             throw new Error(`Directorio no encontrado: ${htmlDir}`);
//         }

//         const files = fs.readdirSync(htmlDir)
//             .filter(file => file.startsWith("municipio_") && file.endsWith(".html"))
//             .sort((a, b) => {
//                 const numA = parseInt(a.match(/\d+/)[0]);
//                 const numB = parseInt(b.match(/\d+/)[0]);
//                 return numA - numB;
//             });

//         if (files.length === 0) {
//             throw new Error(`No hay archivos HTML en: ${htmlDir}`);
//         }

//         return files.map((file, index) => {
//             const filePath = path.join(htmlDir, file);
//             const html = fs.readFileSync(filePath, "utf-8");
//             const $ = cheerio.load(html);

//             const name = $("h3.tit_comuna").text().trim();

//             // Imprimir todo el contenido del archivo HTML para depuración
//             // console.log("Contenido HTML del archivo:");
//             // console.log($.html());  // Esto imprimirá todo el HTML para depuración

//             // Función para obtener el valor de cada indicador
//             const getIndicatorValue = (indicatorName) => {
//                 return $(".file .col_info_tit_2:contains('" + indicatorName + "')")
//                     .closest(".file")
//                     .find(".col_info_comunal")
//                     .text()
//                     .trim() || "No Recepcionado";  // Devolver "No Recepcionado" si no se encuentra el valor
//             };

//             // Extraemos los valores de todos los indicadores
//             const femalePopulation = getIndicatorValue("Porcentaje de Población Comunal Femenina");
//             const malePopulation = getIndicatorValue("Porcentaje de Población Comunal Masculina");
//             const municipalFund = getIndicatorValue("Ingresos por Fondo Común Municipal");
//             const ownIncome = getIndicatorValue("Ingresos Propios (IPP y FCM)");
//             const waterConsumption = getIndicatorValue("Consumo de Agua");
//             const healthExpenditure = getIndicatorValue("Gastos Salud (Gasto Total Devengado)");
//             const healthIncome = getIndicatorValue("Ingresos Salud (Ingreso Total Percibido)");

//             // Imprimir los valores extraídos para depuración
//             console.log(`Comuna: ${name}`);
//             console.log(`Porcentaje de Población Comunal Femenina: ${femalePopulation}`);
//             console.log(`Porcentaje de Población Comunal Masculina: ${malePopulation}`);
//             console.log(`Ingresos por Fondo Común Municipal: ${municipalFund}`);
//             console.log(`Ingresos Propios (IPP y FCM): ${ownIncome}`);
//             console.log(`Consumo de Agua: ${waterConsumption}`);
//             console.log(`Gasto en Salud: ${healthExpenditure}`);
//             console.log(`Ingresos Salud: ${healthIncome}`);

//             // Retornar los valores extraídos
//             return {
//                 id: (index + 1).toString(),
//                 name: name || "Nombre no encontrado",
//                 femalePopulation: femalePopulation,
//                 malePopulation: malePopulation,
//                 municipalFund: municipalFund,
//                 ownIncome: ownIncome,
//                 waterConsumption: waterConsumption,
//                 healthExpenditure: healthExpenditure,
//                 healthIncome: healthIncome,
//                 fileName: file
//             };
//         });

//     } catch (error) {
//         console.error("Error completo al parsear:", error);
//         return [];
//     }
// }

import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function parseCommunes() {
    const htmlDir = path.join(__dirname, '../../../web-scraping-main/example');  // Ajusta la ruta si es necesario

    console.log("Buscando archivos en:", htmlDir);

    try {
        if (!fs.existsSync(htmlDir)) {
            console.error("ERROR: El directorio no existe.");
            throw new Error(`Directorio no encontrado: ${htmlDir}`);
        }

        const files = fs.readdirSync(htmlDir)
            .filter(file => file.startsWith("municipio_") && file.endsWith(".html"))
            .sort((a, b) => {
                const numA = parseInt(a.match(/\d+/)[0]);
                const numB = parseInt(b.match(/\d+/)[0]);
                return numA - numB;
            });

        if (files.length === 0) {
            throw new Error(`No hay archivos HTML en: ${htmlDir}`);
        }

        return files.map((file, index) => {
            const filePath = path.join(htmlDir, file);
            const html = fs.readFileSync(filePath, "utf-8");
            const $ = cheerio.load(html);

            // Función para extraer información básica de cada comuna (de parserc.js)
            const name = $("h3.tit_comuna").text().trim();
            const infoDiv = $("div.info_municipio.mright");
            const region = infoDiv.find("dt:contains('Región:')").next("dd").text().trim();
            const province = infoDiv.find("dt:contains('Provincia:')").next("dd").text().trim();
            const address = infoDiv.find("dt:contains('Dirección:')").next("dd").text().trim();
            const phone = infoDiv.find("dt:contains('Teléfono:')").next("dd").text().trim();
            const mayor = $("div.nombre_alcalde h3").text().trim();
            const superficie = $("#tab-geografia .file:contains('Superficie Comunal') .col_info_comunal").text().trim();
            const poblacion = $("#tab-poblacin-comunal .file:contains('Población Comunal') .col_info_comunal").text().trim();

            // Función para extraer indicadores adicionales (de parser.js)
            const getIndicatorValue = (indicatorName) => {
                return $(".file .col_info_tit_2:contains('" + indicatorName + "')")
                    .closest(".file")
                    .find(".col_info_comunal")
                    .text()
                    .trim() || "No Recepcionado";  // Devolver "No Recepcionado" si no se encuentra el valor
            };

            const femalePopulation = getIndicatorValue("Porcentaje de Población Comunal Femenina");
            const malePopulation = getIndicatorValue("Porcentaje de Población Comunal Masculina");
            const municipalFund = getIndicatorValue("Ingresos por Fondo Común Municipal");
            const ownIncome = getIndicatorValue("Ingresos Propios (IPP y FCM)");
            const waterConsumption = getIndicatorValue("Consumo de Agua");
            const healthExpenditure = getIndicatorValue("Gastos Salud (Gasto Total Devengado)");
            const healthIncome = getIndicatorValue("Ingresos Salud (Ingreso Total Percibido)");

            // Retornar los datos combinados
            return {
                id: (index + 1).toString(),
                name: name || "Nombre no encontrado",
                province: province || "Provincia no encontrada",
                address: address || "Dirección no encontrada",
                mayor: mayor || "Alcalde no encontrado",
                surface: superficie || "Superficie no encontrada",
                population: poblacion || "Población no encontrada",
                region: region || "Región no encontrada",
                phone: phone || "Teléfono no encontrado",
                femalePopulation: femalePopulation,
                malePopulation: malePopulation,
                municipalFund: municipalFund,
                ownIncome: ownIncome,
                waterConsumption: waterConsumption,
                healthExpenditure: healthExpenditure,
                healthIncome: healthIncome,
                fileName: file
            };
        });

    } catch (error) {
        console.error("Error completo al parsear:", error);
        return [];
    }
}
