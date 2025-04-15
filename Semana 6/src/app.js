/*import { getData } from "./pokemon.js";
import QRCode from "qrcode";

async function main() {
  const data = await getData("https://pokeapi.co/api/v2/pokemon-species");
  const data2 = await getData(data.next);

  const completedResult = [...data.results, ...data2.results];

  console.log(completedResult);
}

(async ()=> await main())();
*/

import express from 'express';
import bd from './bd/bd.utils.js';

const app = express();

app.use(express.json());

app.get('/home', (req, res) => {
  res.send('Hello World');
});

app.get('/casa', (req, res) => {
  res.status(400).send('naxo');
});

app.get('/maquina', (req, res) => {
  const result=bd.readTableDB("inventory");
  res.status(200).json(result);
});

app.post('/maquina', (req, res) => {
  const { nombreObjeto, precio } = req.body;

  if (!nombreObjeto) 
    return res.status(400).json({ error: 'No se proporcionó nombreObjeto' });
  
  if (!precio) 
    return res.status(400).json({ error: 'No se proporcionó precio' });
  

  const toSave = { nombreObjeto, precio };

    bd.addObjectInTable('inventory', toSave);
    res.status(200).json({ nombreObjeto, precio });

});

app.get('/maquina/:id', (req, res) => {
  const result = bd.readTableDB("inventory");
  const {id} = req.params;
  const elementWithId = result.find ((element)=> ""+element.id===id);
  res.status(200).json(elementWithId);
});

app.put('/maquina/:id', (req, res) => {
  const{id}=req.params;
  const {nombreObjeto, precio} = req.body;

  if (!nombreObjeto) 
    return res.status(400).json({ error: 'No se proporcionó nombreObjeto' });
  if (!precio) 
    return res.status(400).json({ error: 'No se proporcionó precio' });

  const toUpdate = {nombreObjeto, precio};

    bd.updateTableDB("inventory", toUpdate, id);
    res.status(200).json({nombreObjeto, precio})

  res.status(200).json({ mensaje: 'Actualizar elementos de las maquinas' });
});

app.delete('/maquina/:id', (req, res) => {
  const {id} = req.params;
  const removed = bd.deleteTableDB("inventory", Number(id))
  res.status(200).json({ removed });
});

app.listen(3000)