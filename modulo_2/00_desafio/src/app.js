import express from "express";
import server from "./config/server.js";
import path from "path";
import fs from "fs";
import { promises } from "fs";
import functions from "./functions.js";


const readFile = promises.readFile;
const writeFile = promises.writeFile;
const __dirname = path.resolve();

let globalEstados = null;
let globalCidades = null;

const app = express();
const port = server.port;

async function start() {
  try {
    const estadosFilename = path.resolve(
      __dirname,
      "src",
      "data",
      "Estados.json"
    );
    const cidadesFilename = path.resolve(
      __dirname,
      "src",
      "data",
      "Cidades.json"
    );

    let globalEstados = await readFile(estadosFilename, "utf8");
    globalEstados = JSON.parse(globalEstados);

    let globalCidades = await readFile(cidadesFilename, "utf8");
    globalCidades = JSON.parse(globalCidades);


    functions.criarArquivoParaCadaEstado(globalEstados, globalCidades);

  } catch (err) {
    console.log(err);
  }
}

app.listen(port, () => {
  start();
});
