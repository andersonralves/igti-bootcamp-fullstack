import express from 'express';
import server from './config/server.js';
import path from 'path';
import fs  from 'fs';
import { promises } from 'fs';
import functions from './functions.js';

const readFile = promises.readFile;
const writeFile = promises.writeFile;
const __dirname =  path.resolve();

let globalEstados = null;
let globalCidades = null;

const app = express();
const port = server.port;

async function start() {
 
  const estadosFilename = path.resolve(__dirname, 'src', 'data', 'Estados.json');
  const cidadesFilename = path.resolve(__dirname, 'src', 'data', 'Cidades.json');

  await readFile(estadosFilename, 'utf8', (err, data) => {    
    if (err) {
      return;
    }

    globalEstados = dta;
  })

  readFile(cidadesFilename, 'utf8', (err, data) => {    
    if (err) {
      return;
    }

    globalEstados = dta;
  })
 
  
}


app.listen(port, () => {
 start();
});