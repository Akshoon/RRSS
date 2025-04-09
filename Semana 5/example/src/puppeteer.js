import puppeteer from "puppeteer";
import fs from "fs";

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });

  await delay(2000);

  let url="https://datos.sinim.gov.cl/ficha_comunal.php"

  const page = await browser.newPage();
  await delay(1000)
  page.goto(url, {waitUntil: "domcontentloaded"});

  await delay(1000);

  page.setViewport({ width: 1080, height: 1024 }); // Cambiar el tamaño de la ventana
  await delay(1000);
  page.hover("#bar > nav > dl > dt > a");
  await delay(1000);
  page.click("#municipio_chzn > a"); // Hacer hover sobre un elemento
  await delay(1000);
  page.click("#municipio_chzn_o_1")
  await delay(1000);

  const html = await page.content();
  fs.writeFileSync("algarrobo.html",html)
  console.log("Guardao")

  await browser.close();
})();

const delay = async (time = 2000) =>
  await new Promise((resolve) => setTimeout(resolve, time));
